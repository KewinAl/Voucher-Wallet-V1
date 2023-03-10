from django.urls import path
from registration_profiles.views import RegistrationView, ValidationView

urlpatterns = [
    path('', RegistrationView.as_view()),
    path('validate/', ValidationView.as_view()),
]
