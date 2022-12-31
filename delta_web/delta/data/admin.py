from django.contrib import admin

from .models import CSVFile

class CSVFileAdmin(admin.ModelAdmin):
    fields = ['file_path','file_name',"description","is_public"]

admin.site.register(CSVFile,CSVFileAdmin)