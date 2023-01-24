from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status,viewsets,renderers
from knox.models import AuthToken
from organizations.models import Organization
from unicodedata import name
from rest_framework.decorators import action

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

        csvFiles = instance.uploaded_files.all()
        
        serializer = SerializerCSVFile(csvFiles,many=True)

        return Response(serializer.data)
    