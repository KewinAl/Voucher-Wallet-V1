from django.contrib import admin

from .models import ShopProfile


class ShopProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'link')
    ordering = ('name',)


admin.site.register(ShopProfile, ShopProfileAdmin)
