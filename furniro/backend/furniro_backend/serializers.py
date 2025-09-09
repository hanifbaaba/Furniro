from rest_framework import serializers
from .models import Products, Cart, Order,OrderItem

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
     class Meta:
        model = Cart
        fields = '__all__'

class Order(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderItem(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'