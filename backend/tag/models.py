from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f'Tag: {self.id}: {self.name}, {self.description} '
