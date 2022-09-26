from django.contrib import admin

from .models import DataAccel

# Register your models here.

class DataAccelAdmin(admin.ModelAdmin):
    list_display: ["id","file_path"] 

admin.site.register(DataAccel,DataAccelAdmin)