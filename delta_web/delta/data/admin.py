from django.contrib import admin

from .models import CSVFile, DataAccel

# Register your models here.

class DataAccelAdmin(admin.ModelAdmin):
    list_display: ["id","file_path"] 

class CSVFileAdmin(admin.ModelAdmin):
    list_display: ['id','filepath','created_at']

admin.site.register(DataAccel,DataAccelAdmin)
admin.site.register(CSVFile,CSVFileAdmin)