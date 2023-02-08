from rest_framework import serializers

from coupon.models import Coupon, CouponCode
from customerProfile.serializers import CustomerProfileSerializer
from shopProfile.models import ShopProfile


class CouponCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouponCode
        fields = ['redeemed_code', 'has_been_used']


class ShopNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProfile
        fields = ['name']


class CouponSerializer(serializers.ModelSerializer):
    customer_profiles = CustomerProfileSerializer(many=True, read_only=True)
    coupon_codes = CouponCodeSerializer(many=True, read_only=True)
    shop_profile = ShopNameSerializer(read_only=True)

    class Meta:
        model = Coupon
        fields = ['shop_profile', 'expiration_date', 'description', 'times_redeemed', 'amount', 'customer_profiles',
                  'coupon_codes']
        read_only_fields = ['customer_profiles', 'coupon_codes']
