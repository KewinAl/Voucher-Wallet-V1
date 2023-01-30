from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'first_name',
                  'last_name',
                  'email',
                  ]
        read_only_fields = ['email', 'date_joined']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # review_like_queryset = Review.objects.filter(id__in=representation['liked_reviews'])
        # representation['liked_reviews'] = ReviewSerializer(review_like_queryset, many=True).data
        # review_queryset = Review.objects.filter(id__in=representation['reviews_made'])
        # representation['reviews_made'] = ReviewSerializer(review_queryset, many=True).data
        return representation
