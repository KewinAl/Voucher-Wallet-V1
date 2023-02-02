from django.db import models

from users.models import User


class ShopProfile(models.Model):
    description = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name="shop_profile")
    name = models.CharField(max_length=100)
    REQUIRED_FIELDS = ['__all__']
