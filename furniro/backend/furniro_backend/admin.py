from django.contrib import admin

# Register your models here.
from .models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = [
        'id',  'amount', 'created_at' 
    ]
    list_filter = [ 'created_at', ]