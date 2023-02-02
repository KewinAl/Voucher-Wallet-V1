from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'email',
                  'date_joined',
                  'profile_picture'
                  ]
        read_only_fields = ['email', 'date_joined']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return representation
