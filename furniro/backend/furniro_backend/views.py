from django.shortcuts import render
from .models import Product, Cart, Order, OrderItem
from .serializers import ProductSerializer,CartSerializer, OrderSerializer, OrderItemSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]


class CartViewSet(viewsets.ModelViewSet):
     queryset = Cart.objects.all()
     serializer_class = CartSerializer
     permission_classes = [IsAuthenticated]


class OrderViewSet(viewsets.ModelViewSet):
     queryset = Order.objects.all()
     serializer_class = OrderSerializer
     permission_classes = [IsAuthenticated]
     
      def perform_create(self, serializer):
        order = serializer.save()
        total = sum(item.product.price * item.quantity for item in order.items.all())
        order.total_amount = total
        order.save()


class OrderItemViewSet(viewsets.ModelViewSet):
     queryset = OrderItem.objects.all()
     serializer_class = OrderItemSerializer
     permission_classes = [IsAuthenticated]