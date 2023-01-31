from django.urls import path

from users.views import LoggedInUserView

urlpatterns = [
    path('', LoggedInUserView.as_view()),
]
