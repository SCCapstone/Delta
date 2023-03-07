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
from rest_framework import serializers
from .models import Organization

class OrganizationSerializer(serializers.ModelSerializer):
    # extra fields
    following_user_count = serializers.SerializerMethodField()
    date_us_format = serializers.SerializerMethodField()

    class Meta:
        model = Organization
        fields = [
            'timestamp','name','id','following_user_count',"description","date_us_format"
        ]

    def get_following_user_count(self, obj):
        return obj.following_users.count()

    def get_date_us_format(self,obj):
        return obj.timestamp.date()