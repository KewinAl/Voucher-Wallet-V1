from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView

from .models import ShopProfile
from .serializers import ShopProfileSerializer


class ShopProfileView(RetrieveUpdateDestroyAPIView):
    queryset = ShopProfile.objects.all()
    serializer_class = ShopProfileSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'shop_id'  # field in the request
    http_method_names = ['get', 'post', 'put', 'delete']


class LoggedInUserShopProfileView(ListAPIView):
    serializer_class = ShopProfileSerializer

    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        input_user_id = self.request.user.id
        queryset = ShopProfile.objects.filter(user=input_user_id)

        return queryset
