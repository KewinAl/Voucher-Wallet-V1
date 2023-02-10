from rest_framework import serializers
from tag.serializers import TagSerializer
from customerProfile.models import CustomerProfile


class CustomerProfileSerializer(serializers.ModelSerializer):
    coupon_codes = serializers.StringRelatedField(many=True, read_only=True)
    # adding the preferences tags from TAGS models
    preferences = TagSerializer(many=True)

    class Meta:
        model = CustomerProfile
        fields = ['age', 'gender', 'firstname', 'lastname', 'coupon_codes', 'preferences']
