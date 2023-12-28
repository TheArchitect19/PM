from django.urls import path
from .views import reg_shop, get_shops, upload_product

urlpatterns = [
    path('reg_shop', reg_shop),
    path('get_shops', get_shops),
    path('upload_product', upload_product),
]