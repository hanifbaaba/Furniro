from django.contrib.auth.models import User
from .models import Product, Cart, Order, OrderItem, Payment
from .serializers import ProductSerializer,CartSerializer, OrderSerializer, OrderItemSerializer, UserRegistrationSerializer
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from rest_framework.exceptions import PermissionDenied
import requests
from rest_framework.response import Response
from django.conf import settings
import uuid
import json
import hmac
import hashlib
from django.http import HttpResponse

class UserRegistrationView(generics.CreateAPIView):
     queryset = User.objects.all()
     serializer_class = UserRegistrationSerializer
     permission_classes = [AllowAny]
     
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    pagination_class = PageNumberPagination
    
class CartViewSet(viewsets.ModelViewSet):
     queryset = Cart.objects.all()
     serializer_class = CartSerializer
     permission_classes = [IsAuthenticated]
     pagination_class = PageNumberPagination
     
     def get_queryset(self):
          return Cart.objects.filter(user=self.request.user)
     
     def perform_create(self, serializer):
          return serializer.save(user=self.request.user)

class OrderViewSet(viewsets.ModelViewSet):
     queryset = Order.objects.all()
     serializer_class = OrderSerializer
     permission_classes = [IsAuthenticated]
     pagination_class = PageNumberPagination
     
     def get_queryset(self):
          return Order.objects.filter(user=self.request.user)
     
     def perform_create(self, serializer):
          order = serializer.save(user=self.request.user)
          order.update_total()
          return order

class OrderItemViewSet(viewsets.ModelViewSet):
     queryset = OrderItem.objects.all()
     serializer_class = OrderItemSerializer
     permission_classes = [IsAuthenticated]
     pagination_class = PageNumberPagination
     
     def get_queryset(self):
          return OrderItem.objects.filter(order__user=self.request.user)
     
     def perform_create(self, serializer):
        order = serializer.validated_data.get("order")
        if order and order.user != self.request.user:
            raise PermissionDenied("You cannot add items to someone else's order.")
        return serializer.save()

     def perform_update(self, serializer):
        order_item = self.get_object()
        if order_item.order.user != self.request.user:
            raise PermissionDenied("You cannot modify another user's order item.")
        serializer.save()

     def perform_destroy(self, instance):
        if instance.order.user != self.request.user:
            raise PermissionDenied("You cannot delete another user's order item.")
        instance.delete()
    
class StandardResultsSetPagination(PageNumberPagination):
     page_size = 10
     page_size_query_param = 'page_size'
     max_page_size = 50
     
class InitializePaymentView(APIView):
     def post(self, request):
        email = request.data.get("email")
        amount = request.data.get("amount")  

        reference = str(uuid.uuid4())

        payment = Payment.objects.create(
            email=email,
            amount=amount,
            reference=reference
        )

        headers = {
            "Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}",
            "Content-Type": "application/json"
        }

        data = {
            "email": email,
            "amount": int(float(amount) * 100),
            "reference": reference,
            "callback_url": "http://localhost:3000/"
        }

        url = f"{settings.PAYSTACK_BASE_URL}/transaction/initialize"

        response = requests.post(url, json=data, headers=headers).json()

        return Response(response.json(), status=response.status_code)

class VerifyPaymentView(APIView):
    def get(self, request, reference):
        url = f"{settings.PAYSTACK_BASE_URL}/transaction/verify/{reference}"

        headers = {
            "Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}",
        }
        response = requests.get(url, headers=headers).json()
        body = response.json()
        try:
            payment = Payment.objects.get(reference=reference)
        except Payment.DoesNotExist:
            return Response({"detail": "Payment not found"}, status=404)

        if body.get("data", {}).get("status") == "success":
            payment.status = "success"
        else:
            payment.status = "failed"
        payment.save()
        return Response(body, status=response.status_code)

     
class PaystackWebhookView(APIView):
    permission_classes = [AllowAny] 

    def post(self, request):
        paystack_signature = request.headers.get("X-Paystack-Signature")
        body = request.body

        expected_signature = hmac.new(
            settings.PAYSTACK_SECRET_KEY.encode(),
            msg=body,
            digestmod=hashlib.sha512,
        ).hexdigest()

        if paystack_signature != expected_signature:
            return HttpResponse(status=400)

        data = json.loads(body.decode())
        event = data.get("event")
        reference = data.get("data", {}).get("reference")

        try:
            payment = Payment.objects.get(reference=reference)
        except Payment.DoesNotExist:
            return HttpResponse(status=404)

        if event == "charge.success":
            payment.status = "success"
        else:
            payment.status = "failed"

        payment.save()
        return HttpResponse(status=200)