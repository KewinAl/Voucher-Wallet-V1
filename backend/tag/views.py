from rest_framework.generics import RetrieveUpdateDestroyAPIView

from tag.models import Tag
from tag.serializers import TagSerializer


class TagView(RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'tag_id'  # field in the request
    http_method_names = ['get', 'post', 'put', 'delete']
