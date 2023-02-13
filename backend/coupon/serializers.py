from rest_framework import serializers

from coupon.models import Coupon, CouponCode
from customerProfile.serializers import CustomerProfileSerializer
from shopProfile.models import ShopProfile
from tag.models import Tag


class CouponCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CouponCode
        fields = ['redeemed_code']


class ShopProfileNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProfile
        fields = ['id', 'name']


class CouponSerializer(serializers.ModelSerializer):
    customer_profiles = CustomerProfileSerializer(many=True, read_only=True)
    coupon_codes = CouponCodeSerializer(many=True, read_only=True)
    shop_profile = ShopProfileNameSerializer(read_only=False)
    tag = serializers.PrimaryKeyRelatedField(queryset=Tag.objects.all(), allow_null=True, write_only=True)

    class Meta:
        model = Coupon
        fields = ['id', 'shop_profile', 'customer_profiles', 'expiration_date', 'title', 'description', 'times_used',
                  'times_redeemed', 'redeem_limit', 'discount_type', 'discount', 'currency', 'tag', 'coupon_codes']
        read_only_fields = ['customer_profiles', 'coupon_codes']

    def create(self, validated_data):
        shop_profile_data = validated_data.pop('shop_profile')

        # Ensure that the 'id' key is present in the shop_profile data
        if 'id' not in shop_profile_data:
            raise serializers.ValidationError({'error': 'The "id" key is missing from the "shop_profile" data'})

        shop_profile = ShopProfile.objects.get(id=shop_profile_data['id'])
        validated_data['shop_profile'] = shop_profile

        coupon = Coupon.objects.create(**validated_data)
        return coupon
