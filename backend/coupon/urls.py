from django.urls import path

from coupon.views import CouponView

urlpatterns = [
    path("<int:coupon_id>/", CouponView.as_view()),
]
