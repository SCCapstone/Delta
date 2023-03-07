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
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status,viewsets,renderers
from knox.models import AuthToken
from organizations.models import Organization
from unicodedata import name
from rest_framework.decorators import action
from itertools import chain

from data.serializers import SerializerCSVFile

from .serializers import OrganizationSerializer


## TO DO!!!
# CHECK ALL PERMISSIONS.
# ONLY ALLOW USERS THEMSELVES TO SEE THEIR ORGANIZATIONS.
class ViewsetOrganizations(viewsets.ModelViewSet):
    queryset = Organization.objects.all()

    serializer_class = OrganizationSerializer

    permission_classes = []

    def get_queryset(self):
        return Organization.objects.all()

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
    def perform_create(self,serializer):
        serializer.save()

    @action(methods=['get'],detail=True)
    def data_posts(self,request,*args,**kwargs):
        instance = self.get_object()

        user_in_org = False
        if request.user in instance.following_users.all():
            user_in_org = True       
            
        PublicCsvFiles = instance.uploaded_files.filter(is_public=True)
        PublicOrgCsvFiles = instance.uploaded_files.filter(is_public_orgs=True)

        if user_in_org:
            csvFiles = list(chain(PublicOrgCsvFiles, PublicCsvFiles))
        else:
            csvFiles = PublicCsvFiles

        serializer = SerializerCSVFile(csvFiles,many=True)

        return Response(serializer.data)
    