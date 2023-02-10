from django.contrib import admin

from .models import Coupon


class CouponAdmin(admin.ModelAdmin):
    list_display = ('id', 'shop_name', 'title', 'description', 'expiration_date')
    ordering = ('shop_profile__name',)

    def shop_name(self, obj):
        return obj.shop_profile.name

    shop_name.short_description = 'Shop Name'


admin.site.register(Coupon, CouponAdmin)
