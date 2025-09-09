from rest_framework import serializers
from .models import Product, Cart, Order,OrderItem

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
     total_price = serializers.SerializerMethodField()
     class Meta:
        model = Cart
        fields = ['id', 'user', 'product' ,'quantity' ,'total_price']
        
     def get_total_price(self, obj):
        return obj.total_price()

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields = ['id', 'user', 'full_name', 'email', 'shipping_address', 'total_amount', 'created_at', 'items']


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = OrderItem
        fields = ['id','product','quantity', 'price']