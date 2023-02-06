from django.db import models

from customerProfile.models import CustomerProfile
from shopProfile.models import ShopProfile


class Coupon(models.Model):
    shop_profile = models.ForeignKey(
        to=ShopProfile, on_delete=models.CASCADE, related_name='coupons_created')
    customer_profiles = models.ManyToManyField(to=CustomerProfile, related_name='coupons_owned', blank=True)
    expiration_date = models.DateTimeField(null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    times_used = models.IntegerField(default=0)
    amount = models.IntegerField(default=0)

    def __str__(self):
        return f'coupon_type: {self.description}'
