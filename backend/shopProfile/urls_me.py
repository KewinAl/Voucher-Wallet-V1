from django.urls import path

from shopProfile.views import LoggedInUserShopProfileView

urlpatterns = [
    path('', LoggedInUserShopProfileView.as_view()),
]
