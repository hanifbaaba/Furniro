from django.shortcuts import render
from .models import Products, Cart
from .serializers import ProductSerializer,CartSerializer
from rest_framework import viewsets
# Create your views here.

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer

    def post(self,request, *args, **kwargs):
         """
         POST /products/create/ - Create a new product.
         """
         return self.create(request, *args, **kwargs)

      def put(self,request, *args, **kwargs):
         """
         PUT /products/update/ - Updates a product.
         """
         return self.update(request, *args, **kwargs)
     
      def delete(self,request, *args, **kwargs):
         """
         DELETE /products/delete/ - Deletes a product.
         """
         return self.destroy(request, *args, **kwargs)


class CartViewSet(viewsets.ModelViewSet):
     queryset = Cart.objects.all()
     serializer_class = CartSerializer

     def post(self,request, *args, **kwargs):
         """
         POST /cart/create/ - Add Item to cart.
         """
         return self.create(request, *args, **kwargs)
     
      def put(self,request, *args, **kwargs):
         """
         PUT /cart/update/ - Update item in cart.
         """
         return self.update(request, *args, **kwargs)
     
      def delete(self,request, *args, **kwargs):
         """
         DELETE /cart/create/ - Delete item in cart
         """
         return self.destroy(request, *args, **kwargs)

