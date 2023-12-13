from django.urls import path
from .views import signup, login, check

urlpatterns = [
    # path('', include('auth.urls')),
    path('signup', signup),
    path('login', login),
    path('check', check)
]