from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    UserRegistrationView,
    ProductViewSet,
    CartViewSet,
    OrderItemViewSet,
    OrderViewSet,
    PaystackWebhookView,
    VerifyPaymentView,
    InitializePaymentView
)

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'cart', CartViewSet, basename='cart')
router.register(r'orders', OrderViewSet, basename='order')
router.register(r'order-items', OrderItemViewSet, basename='orderitem')

urlpatterns = [
    path("register/", UserRegistrationView.as_view(), name="register"),
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("webhook/", PaystackWebhookView.as_view(), name = "paystack-webhook"),
    path("payments/initialize/", InitializePaymentView.as_view(), name="init-payment"),
    path("payments/verify/<str:reference>/", VerifyPaymentView.as_view(), name="verify-payment"),
    path("", include(router.urls)),  
]