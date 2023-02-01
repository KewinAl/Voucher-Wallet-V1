from django.db import models

from customerProfile.models import CustomerProfile
from shopProfile.models import ShopProfile


class Tag(models.Model):
    shops_tagged = models.ManyToManyField(to=ShopProfile, blank=True, related_name='tags')
    customers_tagging = models.ManyToManyField(to=CustomerProfile, blank=True,
                                               related_name='preferences')
    description = models.TextField(max_length=50, null=True, blank=True)

    def __str__(self):
        return f'Tagged: {self.id}: {self.description}'
