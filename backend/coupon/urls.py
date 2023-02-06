from django.urls import path

from coupon.views import CouponView, CreateNewCoupon

urlpatterns = [
    path('new/', CreateNewCoupon.as_view()),
    path("<int:coupon_id>/", CouponView.as_view()),
]
