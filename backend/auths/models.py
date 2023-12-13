from django.db import models

def profilepic_path(instance, filename):
  return f'Buyers/{instance.email}/profilepic/{filename}'
    
class Buyers(models.Model):
  class Meta:
    verbose_name_plural = "Buyers"
  email = models.CharField(unique=True)
  phone = models.CharField(unique=True)
  name = models.CharField()
  address = models.CharField()
  password = models.CharField(null=False)
  profilepic = models.FileField(upload_to=profilepic_path)
  