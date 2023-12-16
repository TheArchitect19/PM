from django.db import models

def buyer_profilepic_path(instance, filename):
  return f'Buyers/{instance.email}/profilepic/{filename}'

def seller_profilepic_path(instance, filename):
  return f'Sellers/{instance.email}/profilepic/{filename}'
    
class Buyer(models.Model):
  email = models.CharField(unique=True)
  phone = models.CharField(unique=True)
  name = models.CharField()
  address = models.CharField()
  password = models.CharField(null=False)
  profilepic = models.FileField(upload_to=buyer_profilepic_path)

class Seller(models.Model):
  email = models.CharField(unique=True)
  phone = models.CharField(unique=True)
  name = models.CharField()
  address = models.CharField()
  password = models.CharField(null=False)
  profilepic = models.FileField(upload_to=seller_profilepic_path)
