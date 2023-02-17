from django.contrib import admin

# Register your models here.
from .models import Profile

class ProfileAdmin(admin.ModelAdmin):
    fields = ["user","bio"]

admin.site.register(Profile,ProfileAdmin)