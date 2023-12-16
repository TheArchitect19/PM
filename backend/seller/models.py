from django.db import models

class Shop(models.Model):
  name = models.CharField()
  description = models.CharField()
  address = models.CharField()
  business_name = models.CharField()
  isCG = models.BooleanField()
  GST = models.CharField()
  bank_account = models.CharField()
