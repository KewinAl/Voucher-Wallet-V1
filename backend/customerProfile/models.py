from enum import Enum
from django.db import models

from users.models import User


class Gender(Enum):
    MALE = 'Male'
    FEMALE = 'Female'
    OTHER = 'Other'


class CustomerProfile(models.Model):
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(
        max_length=6,
        choices=[(tag.name, tag.value) for tag in Gender],
        default=Gender.OTHER,
    )
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name="customer_profile")
