from django.contrib import admin

from shopProfile.models import ShopProfile
from .models import Coupon


class CouponAdmin(admin.ModelAdmin):
    list_display = ('id', 'shop_name', 'title', 'description', 'expiration_date')
    ordering = ('shop_profile__name',)

    def shop_name(self, obj):
        return obj.shop_profile.name

    shop_name.short_description = 'Shop Name'

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "shop_profile":
            kwargs["queryset"] = ShopProfile.objects.order_by("name")
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


admin.site.register(Coupon, CouponAdmin)
