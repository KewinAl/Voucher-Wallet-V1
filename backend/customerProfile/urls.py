from django.urls import path

from customerProfile.views import CustomerProfileView

urlpatterns = [
    path("<int:customer_id>/", CustomerProfileView.as_view()),
]
