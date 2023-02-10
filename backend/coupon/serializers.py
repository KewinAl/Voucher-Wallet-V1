from rest_framework import serializers

from coupon.models import Coupon, CouponCode
from customerProfile.serializers import CustomerProfileSerializer
from shopProfile.models import ShopProfile
from tag.serializers import TagSerializer


class CouponCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouponCode
        fields = ['redeemed_code']


class ShopNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProfile
        fields = ['name']


class CouponSerializer(serializers.ModelSerializer):
    customer_profiles = CustomerProfileSerializer(many=True, read_only=True)
    coupon_codes = CouponCodeSerializer(many=True, read_only=True)
    shop_profile = ShopNameSerializer(read_only=True)
    tag = TagSerializer()

    class Meta:
        model = Coupon
        fields = ['shop_profile', 'customer_profiles', 'expiration_date', 'title', 'description', 'times_used',
                  'times_redeemed', 'redeem_limit', 'discount_type', 'discount', 'currency', 'tag', 'coupon_codes']
        read_only_fields = ['customer_profiles', 'coupon_codes']
