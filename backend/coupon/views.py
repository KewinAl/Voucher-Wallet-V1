from django.db.models import Q, F
from django.utils import timezone
from rest_framework import generics
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from shopProfile.models import ShopProfile
from .models import Coupon
from .serializers import CouponSerializer


# Filter List All Coupons to only show Coupons that are not expired AND where (redeem_limit = 0 OR redeem_limit > times_redeemed)
class CouponListView(ListAPIView):
    queryset = Coupon.objects.filter(
        Q(redeem_limit=0) | Q(redeem_limit__gt=F('times_redeemed')),
        expiration_date__gt=timezone.now()
    )
    serializer_class = CouponSerializer


class CouponView(RetrieveUpdateDestroyAPIView):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'coupon_id'  # field in the request
    http_method_names = ['get', 'post', 'put', 'delete']


class CreateNewCoupon(generics.CreateAPIView):
    serializer_class = CouponSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        shop_profile_data = serializer.validated_data.pop('shop_profile', {})
        shop_profile_id = shop_profile_data.get('id')
        if not shop_profile_id:
            return Response({'error': 'The "id" key is missing from the "shop_profile" data'})
        shop_profile = ShopProfile.objects.get(id=shop_profile_id)
        coupon = Coupon.objects.create(shop_profile=shop_profile, **serializer.validated_data)
        return Response({'message': 'Coupon created successfully', 'coupon_id': coupon.id})
