from rest_framework import serializers

from coupon.serializers import CouponSerializer
from shopProfile.models import ShopProfile


class ShopProfileSerializer(serializers.ModelSerializer):
    coupons_created = CouponSerializer(many=True, read_only=True)
    shop_logo = serializers.ImageField(use_url=True, required=False)

    class Meta:
        model = ShopProfile
        fields = ['name', 'description', 'link', 'coupons_created', 'shop_logo']
        read_only_fields = ['coupons_created', ]
