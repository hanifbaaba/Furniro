from django.shortcuts import render
from .models import Product, Cart, Order, OrderItem
from .serializers import ProductSerializer,CartSerializer, OrderSerializer, OrderItemSerializer, UserRegistrationSerializer
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from rest_framework.permissions import AllowAny

class UserRegistrationView(generics.CreateAPIView):
     queryset = User.objects.all()
     serializer_class = UserRegistrationSerializer
     permission_classes = [AllowAny]
     
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]
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
    
class StandardResultsSetPagination(PageNumberPagination):
     page_size = 10
     page_size_query_param = 'page_size'
     max_page_size = 50
     

# {"refresh":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc1NzY4NDAyNiwiaWF0IjoxNzU3NTk3NjI2LCJqdGkiOiJlNzA4ZjM1NTNiYzM0M2QzOTlkOTllMzgxY2ExY2ZiYyIsInVzZXJfaWQiOiIyIn0.SDYCAJfhZHP1-t_ovCAmPRqOf6mAMymFDO-EPUYeZ28","access":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU3NTk3OTI2LCJpYXQiOjE3NTc1OTc2MjYsImp0aSI6IjM0ODVlOTEzYTUwNTQ4YTlhZTdmZGM1MDE4MGUzODk4IiwidXNlcl9pZCI6IjIifQ.PgY4u_pn4dCuzwAXA0UC-2bodtTZo-RfUmXt0E3CYkQ"}% 