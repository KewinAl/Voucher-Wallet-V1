import random
import string

from django.db import models

from customerProfile.models import CustomerProfile
from shopProfile.models import ShopProfile
from tag.models import Tag


class Coupon(models.Model):
    DISCOUNT_TYPE_CHOICES = [
        ('value', 'Value'),
        ('percentage', 'Percentage'),
    ]

    CURRENCY_CHOICES = [
        ('USD', 'US Dollar'),
        ('EUR', 'Euro'),
        ('GBP', 'British Pound'),
    ]

    shop_profile = models.ForeignKey(
        to=ShopProfile, on_delete=models.CASCADE, related_name='coupons_created')
    customer_profiles = models.ManyToManyField(to=CustomerProfile, related_name='coupons_owned', blank=True)
    expiration_date = models.DateTimeField(null=True, blank=True)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True, blank=True)
    times_used = models.IntegerField(default=0)
    times_redeemed = models.IntegerField(default=0)
    redeem_limit = models.IntegerField(default=0)
    discount_type = models.CharField(
        max_length=10, choices=DISCOUNT_TYPE_CHOICES, default='percentage')
    discount = models.FloatField(default=0)
    currency = models.CharField(
        max_length=3, choices=CURRENCY_CHOICES, default='EUR',
        blank=True, null=True
    )
    tag = models.ForeignKey(
        to=Tag, on_delete=models.SET_NULL, related_name='coupon_tag', null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.discount_type == 'percentage':
            self.currency = None
        super().save(*args, **kwargs)

    def __str__(self):
        return f'coupon_type: {self.description}'


class CouponCode(models.Model):
    redeemed_code = models.CharField(max_length=100, unique=True, blank=True, null=True)
    coupon = models.ForeignKey(Coupon, on_delete=models.CASCADE, related_name='codes')
    customer_profile = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE, related_name='codes')
    has_been_used = models.BooleanField(default=False)

    class Meta:
        unique_together = ('coupon', 'customer_profile')

    def redeem_code(self, customer_id, coupon_id):
        customer = CustomerProfile.objects.get(id=customer_id)
        coupon = Coupon.objects.get(id=coupon_id)

        if coupon.times_redeemed >= coupon.redeem_limit:
            return "The coupon has already been redeemed the maximum redeem_limit of times"
        elif self.objects.filter(coupon=coupon, customer_profile=customer).exists():
            return "This coupon has already been redeemed by this customer"
        else:
            coupon.times_redeemed += 1
            coupon.save()
            self.coupon = coupon
            self.customer_profile = customer
            self.redeemed_code = self.generate_code()
            self.save()
            return "Coupon redeemed successfully"

    def generate_code(self):
        code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
        if self.objects.filter(redeemed_code=code).exists():
            return self.generate_code()
        return code
