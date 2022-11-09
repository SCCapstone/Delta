from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from knox.models import AuthToken
from organizations.models import Organization
from unicodedata import name

# Add a follower to an organization
class AddFollowerAPI(generics.GenericAPIView):

    # using as guide: https://stackoverflow.com/questions/58794639/how-to-make-follower-following-system-with-django-model
    # Do I need to write a serializer for the intermediate Followertable?
    
    def post(self, request, *args, **kwargs):

        # User, not an organization
        user_id = models.ForeignKey('User', related_name='following')

        # 
        following_user_id = models.ForeignKey('User', related_name='followers')

        created = models.DateTimeField(auto_now_add=True)

        AddFollowerAPI.objects.create(user_id=user.id, following_user_id=follow.id)
