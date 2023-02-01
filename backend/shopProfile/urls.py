from django.urls import path

from shopProfile.views import ShopProfileView

urlpatterns = [
    path("<int:shop_id>/", ShopProfileView.as_view()),
]
