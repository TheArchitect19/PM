from django.urls import path
from .views import reg_shop

urlpatterns = [
    path('reg_shop', reg_shop),
]