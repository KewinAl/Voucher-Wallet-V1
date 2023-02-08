from rest_framework import serializers
from coupon.serializers import CouponSerializer
from shopProfile.models import ShopProfile


class ShopProfileSerializer(serializers.ModelSerializer):
    coupons_created = CouponSerializer(many=True, read_only=True)

    class Meta:
        model = ShopProfile
        fields = ['name', 'description', 'link', 'coupons_created']
        read_only_fields = ['coupons_created', ]
