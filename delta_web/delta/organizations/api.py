from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from knox.models import AuthToken
from organizations.models import Organization
from unicodedata import name

# Add a follower to an organization
class AddFollowerAPI(generics.GenericAPIView):