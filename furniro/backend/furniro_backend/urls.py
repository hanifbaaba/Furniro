from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from views import UserRegistrationView
from django.urls import path, include

urlpatterns = [
    path("api/register/", UserRegistrationView.as_view(), name="register"),
    path("api/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
