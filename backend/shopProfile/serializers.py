from rest_framework import serializers

from coupon.serializers import CouponSerializer
from shopProfile.models import ShopProfile


class ShopProfileSerializer(serializers.ModelSerializer):
    coupons_created = CouponSerializer(many=True)

    class Meta:
        model = ShopProfile
        fields = '__all__'
        read_only_fields = ['coupons_created', ]
