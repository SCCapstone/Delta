from django.contrib import admin

# Register your models here.
from .models import Profile

class ProfileAdmin(admin.ModelAdmin):
    fields = ["user","bio","image"]

admin.site.register(Profile,ProfileAdmin)