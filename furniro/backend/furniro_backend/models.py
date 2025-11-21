from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank = True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=100)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete= models.CASCADE, related_name = 'carts')
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    quantity = models.PositiveIntegerField(default = 1)
    
    class Meta:
        unique_together = ('user', 'product')

    def total_price(self):
        return self.product.price * self.quantity


class Order(models.Model):
        user = models.ForeignKey(User, on_delete=models.CASCADE)
        full_name = models.CharField(max_length=255)
        email = models.EmailField()
        shipping_address = models.TextField()
        total_amount = models.DecimalField(max_digits=10, decimal_places=2, default = 0.00)


        def update_total(self):
            total = sum(item.product.price * item.quantity for item in self.items.all())
            self.total_amount = total
            self.save()
            
        def __str__(self):
            return f"Order {self.id} by {self.full_name}"

class OrderItem(models.Model):
        order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
        product = models.ForeignKey(Product, on_delete = models.CASCADE, null=True, blank =True)
        quantity = models.PositiveIntegerField()
        price = models.DecimalField(max_digits=10, decimal_places=2,blank=True)
         
        def save(self, *args, **kwargs):
            if not self.price:
                self.price = self.product.price
            super().save(*args, **kwargs)
            self.order.update_total()

        def delete(self, *args, **kwargs):
            super().delete(*args, **kwargs)
            self.order.update_total()

        def __str__(self):
            return f"{self.quantity} x {self.product.name} for Order {self.order.id}"

class Payment(models.Model):
    email = models.EmailField(unique = True)
    amount  = models.DecimalField(max_digits = 10, decimal_places = 2)
    status = models.CharField(max_length=20, default="pending")
    created_at = models.DateTimeField(auto_now_add=True)
    paystack_ref = models.CharField(max_length= 200, unique = True)

    
    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return f"payment {self.id}"
    
    def get_amount(self):
        return self.amount
    
     
