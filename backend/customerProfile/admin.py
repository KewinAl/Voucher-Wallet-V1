from django.contrib import admin

from .models import CustomerProfile


class CustomerProfileAdmin(admin.ModelAdmin):
    list_display = ('lastname', 'firstname')
    ordering = ('lastname',)


admin.site.register(CustomerProfile, CustomerProfileAdmin)
