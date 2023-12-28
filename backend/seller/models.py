from django.db import models
from auths.models import Seller

def shop_image_address(instance, filename):
  return f"shop_images/{instance.owner.email}/{instance.name}/{filename}"

def banner_image_address(instance, filename):
  return f"banners/{instance.owner.email}/{instance.name}/{filename}"

def product_image_address(instance, filename):
  return f"products/{instance.shop.owner.email}/{instance.shop.name}/{filename}"

class Shop(models.Model):
  class Meta:
    unique_together = (('owner', 'name'),)
  owner = models.ForeignKey(Seller, to_field='email', on_delete=models.CASCADE)
  name = models.CharField()
  description = models.CharField()
  address = models.CharField()
  shop_image = models.FileField(upload_to=shop_image_address)
  banner = models.FileField(upload_to=banner_image_address)
  instagram_handle = models.CharField()
  yt_handle = models.CharField()
  GST = models.CharField()
  bank_account = models.CharField()
  # business_name = models.CharField()
  # isCG = models.BooleanField()

class Product(models.Model):
  shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
  name = models.CharField()
  description = models.CharField()
  price = models.CharField()
  category = models.CharField()
  brand = models.CharField()
  stock = models.CharField()
  size = models.CharField()
  image1 = models.FileField(upload_to=product_image_address)
  image2 = models.FileField(upload_to=product_image_address, null=True)
  image3 = models.FileField(upload_to=product_image_address, null=True)
  image4 = models.FileField(upload_to=product_image_address, null=True)
  image5 = models.FileField(upload_to=product_image_address, null=True)
  video = models.CharField()
  hashtags = models.CharField()
