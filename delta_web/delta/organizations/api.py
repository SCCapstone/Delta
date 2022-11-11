from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status,viewsets
from knox.models import AuthToken
from organizations.models import Organization
from unicodedata import name

from .serializers import OrganizationSerializer


class ViewsetOrganizations(viewsets.ModelViewSet):
    queryset = Organization.objects.all()

    serializer_class = OrganizationSerializer

    permission_classes = []

    def get_queryset(self):
        return Organization.objects.all()
