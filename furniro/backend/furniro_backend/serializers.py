from rest_framework import serializers
from .models import Product, Cart, Order,OrderItem, Payment
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
     total_price = serializers.SerializerMethodField()
     class Meta:
        model = Cart
        fields = ['id', 'user', 'product' ,'quantity' ,'total_price']
        
     def get_total_price(self, obj):
        return obj.total_price()

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), source="product", write_only=True)
    class Meta:
        model = OrderItem
        fields = ['id','product','product_id','quantity', 'price']
        read_only_fields = ['price']
    
    def validate_quantity(self, value):
     if value < 1:
        raise serializers.ValidationError("Quantity must be at least 1")
     return value

        
class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only = True)
    class Meta:
        model = Order
        fields = ['id', 'user', 'full_name', 'email', 'shipping_address', 'total_amount', 'items']


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    
    class Meta:
        model =User
        fields = ['username', 'email', 'password']
        
    def create(self,validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            email = validated_data['email'],
            password = validated_data['password']
        )
        return user
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already exists")
        return value

    
    def validate_email(self, value):
      if User.objects.filter(email=value).exists():
        raise serializers.ValidationError("Email already exists")
      return value

    
class PaymentSerializer(serializers.Serializer):
    class Meta:
        model = Payment
        fields = '__all__'
        