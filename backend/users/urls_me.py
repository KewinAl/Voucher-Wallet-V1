from django.urls import path

from .views import LoggedInUserView

urlpatterns = [
    path('', LoggedInUserView.as_view()),
]
