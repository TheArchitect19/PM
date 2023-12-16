from django.urls import path
from .views import signup, login, check

urlpatterns = [
    path('signup', signup),
    path('login', login),
    path('check', check),
]