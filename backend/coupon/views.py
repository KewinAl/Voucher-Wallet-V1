from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Coupon
from .serializers import CouponSerializer


class CouponView(RetrieveUpdateDestroyAPIView):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'coupon_id'  # field in the request
    http_method_names = ['get', 'post', 'put', 'delete']
