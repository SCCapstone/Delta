from django.contrib import admin

# Register your models here.
from .models import Organization

class OrganizationAdmin(admin.ModelAdmin):
    list_display: ['id','author','timestamp','name']

admin.site.register(Organization,OrganizationAdmin)