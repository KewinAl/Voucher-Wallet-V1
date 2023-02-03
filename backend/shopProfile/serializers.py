from rest_framework import serializers

from coupon.serializers import CouponSerializer
from shopProfile.models import ShopProfile


class ShopProfileSerializer(serializers.ModelSerializer):
    coupons_created = CouponSerializer(many=True)

    class Meta:
        model = ShopProfile
        fields = ['id', 'name', 'description', 'link', 'coupons_created']
