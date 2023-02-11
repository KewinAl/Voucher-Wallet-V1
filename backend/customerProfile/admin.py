from django.contrib import admin

from .models import CustomerProfile


class CustomerProfileAdmin(admin.ModelAdmin):
    list_display = ('lastname', 'firstname')
    ordering = ('lastname',)

    def redeemed_code(self, obj):
        return obj.codes.redeemed_code

    redeemed_code.short_description = 'Codes'


admin.site.register(CustomerProfile, CustomerProfileAdmin)
