########################
#
# Delta project.
#
# Authors:
# Lexington Whalen (@lxaw)
# Carter Marlowe (@Cmarlowe132)
# Vince Kolb-LugoVince (@vancevince) 
# Blake Seekings (@j-blake-s)
# Naveen Chithan (@nchithan)
#
# File name:
#
# Brief description:
#
from django.contrib import admin

from .models import CSVFile, TagCsvFile

class CSVFileAdmin(admin.ModelAdmin):
    fields = ['file_path','file_name',"description","is_public",
    "is_public_orgs","registered_organizations","author"]

class TagCsvFileAdmin(admin.ModelAdmin):
    fields = ['text','pub_date','file']

admin.site.register(CSVFile,CSVFileAdmin)
admin.site.register(TagCsvFile,TagCsvFileAdmin)