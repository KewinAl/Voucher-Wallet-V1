from rest_framework import serializers
from tag.models import Tag
from tag.serializers import TagSerializer
from customerProfile.models import CustomerProfile


class CustomerProfileSerializer(serializers.ModelSerializer):
    coupon_codes = serializers.StringRelatedField(many=True, read_only=True)
    preferences = TagSerializer(many=True)

    class Meta:
        model = CustomerProfile
        fields = ['age', 'gender', 'firstname', 'lastname', 'coupon_codes', 'preferences']
