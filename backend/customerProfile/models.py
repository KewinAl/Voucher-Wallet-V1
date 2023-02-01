from enum import Enum
from django.db import models


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
