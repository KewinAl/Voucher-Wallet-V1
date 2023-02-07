from django.db.models import Q, F
from django.utils import timezone
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView, ListAPIView

from .models import Coupon
from .serializers import CouponSerializer


# Filter List All Coupons to only show Coupons that are not expired AND where (amount = 0 OR amount > times_used)
class CouponListView(
    ListAPIView):
    queryset = Coupon.objects.filter(
        Q(amount=0) | Q(amount__gt=F('times_used')),
        expiration_date__gt=timezone.now()
    )
    serializer_class = CouponSerializer


class CouponView(RetrieveUpdateDestroyAPIView):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'coupon_id'  # field in the request
    http_method_names = ['get', 'post', 'put', 'delete']


class CreateNewCoupon(CreateAPIView):
    serializer_class = CouponSerializer
    queryset = Coupon.objects.all()

    def perform_create(self, serializer):
        serializer.save()
