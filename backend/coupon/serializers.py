from rest_framework import serializers

from coupon.models import Coupon
from customerProfile.serializers import CustomerProfileSerializer


class CouponSerializer(serializers.ModelSerializer):
    customer_profiles = CustomerProfileSerializer(many=True)

    class Meta:
        model = Coupon
        fields = '__all__'
        read_only_fields = ['customer_profiles', ]
