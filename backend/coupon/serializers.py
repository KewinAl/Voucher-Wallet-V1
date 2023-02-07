from rest_framework import serializers

from coupon.models import Coupon, CouponCode
from customerProfile.serializers import CustomerProfileSerializer


class CouponCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouponCode
        fields = ['redeemed_code', 'has_been_used']


class CouponSerializer(serializers.ModelSerializer):
    customer_profiles = CustomerProfileSerializer(many=True, read_only=True)
    coupon_codes = CouponCodeSerializer(many=True, read_only=True)

    class Meta:
        model = Coupon
        fields = ['shop_profile', 'expiration_date', 'description', 'times_used', 'amount', 'customer_profiles',
                  'coupon_codes']
        read_only_fields = ['customer_profiles', 'coupon_codes']
