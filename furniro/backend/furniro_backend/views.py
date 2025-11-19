from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Product, Cart, Order, OrderItem
from .serializers import ProductSerializer,CartSerializer, OrderSerializer, OrderItemSerializer, UserRegistrationSerializer
from rest_framework import viewsets, generics, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from rest_framework.exceptions import PermissionDenied

from django.http import HttpResponse

def home(request):
    return HttpResponse("Backend is running!")


class UserRegistrationView(generics.CreateAPIView):
     queryset = User.objects.all()
     serializer_class = UserRegistrationSerializer
     permission_classes = [AllowAny]
     
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
#     permission_classes = [IsAuthenticated]
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
        order = serializer.validated_data.get["order"]
        if order.user != self.request.user:
            raise PermissionDenied("You cannot add items to someone else's order.")
        serializer.save()

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
     
