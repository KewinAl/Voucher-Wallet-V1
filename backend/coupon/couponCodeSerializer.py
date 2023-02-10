from rest_framework import serializers

from coupon.models import CouponCode


class CouponCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouponCode
        fields = ['redeemed_code']
