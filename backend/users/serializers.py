from rest_framework import serializers

from customerProfile.serializers import CustomerProfileSerializer
from shopProfile.serializers import ShopProfileSerializer
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    shop_profile = ShopProfileSerializer()
    customer_profile = CustomerProfileSerializer()

    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'email',
                  'date_joined',
                  'profile_picture',
                  'shop_profile',
                  'customer_profile'
                  ]
        read_only_fields = ['email', 'date_joined', 'shop_profile', 'customer_profile', ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return representation
