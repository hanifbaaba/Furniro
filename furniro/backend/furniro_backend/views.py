from django.shortcuts import render
from .models import Products, Cart
from .serializers import ProductSerializer,CartSerializer
from rest_framework import viewsets
# Create your views here.

class ProductCreateView(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer

    def post(self,request, *args, **kwargs):
         """
         POST /products/create/ - Create a new product.
         """
         return self.create(request, *args, **kwargs)


class ProductListView(viewsets.ModelViewSet):
      queryset = Products.objects.all()
      serializer_class = ProductSerializer

class CartCreateView(viewsets.ModelViewSet):
     queryset = Cart.objects.all()
     serializer_class = CartSerializer

     def post(self,request, *args, **kwargs):
         """
         POST /cart/create/ - Add Item to cart
         """
         return self.create(request, *args, **kwargs)

class CartListView(viewsets.ModelViewSet):
     queryset = Cart.objects.all()
     serializer_class = CartSerializer
    

class CartDeleteView(viewsets.ModelViewSet):
     queryset = Cart.objects.all()
     serializer_class = CartSerializer

     def delete(self,request, *args, **kwargs):
         """
         DELETE /products/delete/ - Delete item in cart.
         """
         return self.destroy(request, *args, **kwargs)
