from django.urls import path
from .views import PasswordResetView, PasswordResetValidationView

urlpatterns = [
    path('', PasswordResetView.as_view()),
    path('validation/', PasswordResetValidationView.as_view()),
]
