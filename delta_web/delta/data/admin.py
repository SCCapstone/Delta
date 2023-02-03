from django.contrib import admin

from .models import CSVFile, TagCsvFile

class CSVFileAdmin(admin.ModelAdmin):
    fields = ['file_path','file_name',"description","is_public","registered_organizations","author"]

class TagCsvFileAdmin(admin.ModelAdmin):
    fields = ['text','pub_date','file']

admin.site.register(CSVFile,CSVFileAdmin)
admin.site.register(TagCsvFile,TagCsvFileAdmin)