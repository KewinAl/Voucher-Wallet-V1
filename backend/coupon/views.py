from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView
from .models import Coupon
from .serializers import CouponSerializer


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
