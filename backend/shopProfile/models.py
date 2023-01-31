from django.db import models


class ShopProfile(models.Model):
    description = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(null=True, blank=True)
