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

# Register your models here.
from .models import Organization

class OrganizationAdmin(admin.ModelAdmin):
    list_display= ['id','author','timestamp','name']

admin.site.register(Organization,OrganizationAdmin)