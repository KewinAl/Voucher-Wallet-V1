import random
import string

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


class CouponCode(models.Model):
    redeemed_code = models.CharField(max_length=100, unique=True, blank=True, null=True)
    coupon = models.ForeignKey(Coupon, on_delete=models.CASCADE, related_name='codes')
    customer_profile = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE, related_name='codes')
    has_been_used = models.BooleanField(default=False)

    class Meta:
        unique_together = ('coupon', 'customer_profile')

    def generate_code(self, code_length=20):
        code = ''.join(random.choices(string.ascii_letters + string.digits, k=code_length))
        self.redeemed_code = code
        self.save()

