from django.db import models
from customerProfile.models import CustomerProfile
from shopProfile.models import ShopProfile


class Tag(models.Model):
    shops_tagged=models.ManyToManyField(to=ShopProfile,on_delete=models.CASCADE,related_name='shops_tagged')
    customers_tagging=models.ManyToManyField(to=CustomerProfile,on_delete=models.CASCADE,related_name='customers_tagged')
    description=models.TextField(max_length=50,null=True,blank=True)

    def __str__(self):
        return f'Review {self.id}: {self.description}'


