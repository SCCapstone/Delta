from operator import truediv
from rest_framework import serializers
from django.contrib.auth.models import User

from django.contrib.auth import authenticate

from organizations.serializers import OrganizationSerializer

# User serializer
class UserSerializer(serializers.ModelSerializer):
    followed_organization_count = serializers.SerializerMethodField()
    followed_organizations = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('id','username','email','first_name','last_name','followed_organization_count','followed_organizations')
        # cant change id
        read_only_fields = ['id']
    
    def get_followed_organization_count(self,obj):
        return len(obj.followed_organizations.all())
    
    def get_followed_organizations(self,obj):
        listOrgs = obj.followed_organizations.all()
        serializer = OrganizationSerializer(listOrgs,many=True)
        return serializer.data

    

# Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','first_name','last_name','email','password',) # add org stuff here?
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data['username'],
                                        first_name=validated_data['first_name'],
                                        last_name=validated_data['last_name'],
                                        email=validated_data['email'],
                                        password=validated_data['password'])

                                         # add org stuff here?
        return user

# Login serializer
# validation of user
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")