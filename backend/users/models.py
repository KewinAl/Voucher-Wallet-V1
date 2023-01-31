from django.contrib.auth.models import AbstractUser
from django.db import models

from shopProfile.models import ShopProfile


class User(AbstractUser):
    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser (USERNAME_FIELD and passwords are always required)
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    profile_picture = models.ImageField(max_length=255, blank=True)

    shop_profile = models.OneToOneField(to=ShopProfile, on_delete=models.CASCADE, related_name="user", null=True,
                                        blank=True)

    def __str__(self):
        return self.username
