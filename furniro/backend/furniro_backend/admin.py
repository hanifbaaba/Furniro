from django.contrib import admin

# Register your models here.
from .models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = [
        'id', 'first_name', 'last_name', 'email',
         'paid', 'updated_at',
    ]
    list_filter = ['paid', 'created_at', 'updated_at']