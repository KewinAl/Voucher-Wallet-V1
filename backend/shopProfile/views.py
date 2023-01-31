from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import ShopProfile
from .serializers import ShopProfileSerializer


class ShopProfileView(RetrieveUpdateDestroyAPIView):
    queryset = ShopProfile.objects.all()
    serializer_class = ShopProfileSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'shop_id'  # field in the request
    http_method_names = ['get', 'post', 'put', 'delete']
