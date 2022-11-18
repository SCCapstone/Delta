from rest_framework import serializers
from .models import Organization

class OrganizationSerializer(serializers.ModelSerializer):
    following_user_count = serializers.SerializerMethodField()
    class Meta:
        model = Organization
        fields = [
            'timestamp','name','id','following_user_count',"description"
        ]

    def get_following_user_count(self, obj):
        return obj.following_users.count()