from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer,RegisterSerializer,LoginSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self,request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # send back any errors that are needed
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        return Response({
            # give the serialized user
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            # send the token so you can login immediately
            # create token specific for that user
            # AuthToken returns a tuple, need the second item
            "token":AuthToken.objects.create(user)[1]
        })

# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self,request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # send back any errors that are needed
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            # give the serialized user
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            # send the token so you can login immediately
            # create token specific for that user
            # AuthToken returns a tuple, need the second item
            "token":AuthToken.objects.create(user)[1]
        })

# deletion api
class DeleteAPI(generics.DestroyAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def post(self,request,*args,**kwargs):
        #
        # NOTE:
        # DO NOT ACTUALLY DELETE THE USER.
        # ONLY MARK THEM AS INACTIVE
        # see: https://stackoverflow.com/questions/44735385/how-can-i-delete-a-user-account-in-django-rest-framework
        
        request.user.is_active = False
        request.user.save()

        return Response({
            "response":"here"
        })



# Get User API
class UserAPI(generics.RetrieveAPIView):
    # this route needs protection
    # need a valid token to view
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user