from rest_framework import serializers
from shopProfile.models import ShopProfile


class ShopProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProfile
        fields = '__all__'
