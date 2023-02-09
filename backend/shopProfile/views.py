from rest_framework.generics import RetrieveAPIView, RetrieveUpdateDestroyAPIView

from .models import ShopProfile
from .serializers import ShopProfileSerializer


class ShopProfileView(RetrieveAPIView):
    queryset = ShopProfile.objects.all()
    serializer_class = ShopProfileSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'shop_id'  # field in the request
    # permission_classes = [IsAuthenticated]


class LoggedInUserShopProfileView(RetrieveUpdateDestroyAPIView):
    serializer_class = ShopProfileSerializer
    # permission_classes = [IsAuthenticated]
    http_method_names = ['get', 'patch', 'delete']

    def get_object(self):
        input_user_id = self.request.user.id
        queryset = ShopProfile.objects.filter(user=input_user_id)
        shop_profile = queryset.get()
        return shop_profile
