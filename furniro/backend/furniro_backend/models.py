from django.db import models
from django.db import models
from django.contrib.auth.models import User

class Products(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=100)
    # created_at = models.DateTimeField(auto_add=True)
    # images = models.ImageField(upload_to='')
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    product = models.ForeignKey(Products, on_delete = models.CASCADE)
    quantity = models.PositiveIntegerField(default = 1)

    def total_price(self):
        return self.product.price * self.quantity


class Order(models.Model):
        user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
        full_name = models.CharField(max_length=255)
        email = models.EmailField()
        shipping_address = models.TextField()
        total_amount = models.DecimalField(max_digits=10, decimal_places=2)
        # ordered_date = models.DateTimeField(auto_now_add=True)

        def __str__(self):
            return f"Order {self.id} by {self.full_name}"

class OrderItem(models.Model):
        order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
        product_name = models.CharField(max_length=255)
        quantity = models.PositiveIntegerField()
        price = models.DecimalField(max_digits=10, decimal_places=2)

        def __str__(self):
            return f"{self.quantity} x {self.product_name} for Order {self.order.id}"