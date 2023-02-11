from rest_framework import serializers

from coupon.couponCodeSerializer import CouponCodeSerializer
from coupon.models import CouponCode
from customerProfile.models import CustomerProfile
from tag.serializers import TagSerializer


class CustomerProfileSerializer(serializers.ModelSerializer):
    preferences = TagSerializer(many=True, required=False)

    class Meta:
        model = CustomerProfile
        fields = ['age', 'gender', 'firstname', 'lastname', 'preferences']


class CustomerCodeSerializer(serializers.ModelSerializer):
    codes = CouponCodeSerializer(read_only=True)

    class Meta:
        model = CouponCode
        fields = ['redeemed_code']
