from enum import Enum

from django.db import models

from tag.models import Tag
from users.models import User


class Gender(Enum):
    MALE = 'Male'
    FEMALE = 'Female'
    OTHER = 'Other'


class CustomerProfile(models.Model):
    age = models.IntegerField()
    gender = models.CharField(
        max_length=6,
        choices=[(tag.name, tag.value) for tag in Gender],
        default=Gender.OTHER,
    )
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name="customer_profile")
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    preferences = models.ManyToManyField(
        to=Tag, related_name='selected_by', null=True, blank=True)

    REQUIRED_FIELDS = ['__all__']
