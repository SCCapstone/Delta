from django.contrib import admin

from .models import CSVFile, DataAccel

# Register your models here.

class DataAccelAdmin(admin.ModelAdmin):
    fields = ["id","file_path"] 

class CSVFileAdmin(admin.ModelAdmin):
    fields = ['file_path','file_name',"description","is_public"]

admin.site.register(DataAccel,DataAccelAdmin)
admin.site.register(CSVFile,CSVFileAdmin)