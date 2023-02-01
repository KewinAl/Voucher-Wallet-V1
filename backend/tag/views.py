from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from tag.models import Tag
from tag.serializers import TagSerializer

User = get_user_model()


class ListTagView(ListAPIView):
    """
    get:
    Lists all Tags.
    """

    serializer_class = TagSerializer
    queryset = Tag.objects.all()
    permission_classes = [IsAuthenticated]
