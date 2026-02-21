from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [
    path('', views.home),
    path('profile', views.profile),
    path('auth/login',views.login),
    path('auth/token/refresh', TokenRefreshView.as_view()),
]

