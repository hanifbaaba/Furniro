from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=100)
    # images = models.ImageField(upload_to='')

    def __str__(self):
        return self.name