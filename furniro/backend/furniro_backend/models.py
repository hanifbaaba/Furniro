from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Products(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=100)
    # images = models.ImageField(upload_to='')

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    product = models.ForeignKey(Products, on_delete = models.CASCADE)
    quantity = models.PositiveIntegerField(default = 1)

    def total_price(self):
        return self.product.price * self.quantity