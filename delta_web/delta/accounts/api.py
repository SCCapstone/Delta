from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from knox.models import AuthToken
from .serializers import UserSerializer,RegisterSerializer,LoginSerializer
from django.db.utils import IntegrityError

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
            "message":"Account " + request.user.username + " has successfully been deleted."
        })
# deletion api
class UpdateAPI(generics.UpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def patch(self,request,*args,**kwargs):
        # TODO: check email
        # PERFORM CHECKS
        # update user
        strNewUserName = request.data.get("username",None)
        strNewEmail = request.data.get("email",None)
        strNewFirstName = request.data.get("first_name",None)
        strNewLastName = request.data.get("last_name",None)
        strNewPassword = request.data.get("password",None)

        if(strNewUserName):
            try:
                request.user.username = strNewUserName
                request.user.save()
            except Exception as e:
                print(e)
                return Response(data = {"message":"A user with that username already exists."},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if(strNewEmail):
            try:
                request.user.email = strNewEmail
                request.user.save()
            except Exception as e:
                print(e)
                return Response(data={"message":"Error with email."},status = status.HTTP_500_INTERNAL_SERVER_ERROR)
        if(strNewFirstName) :
            request.user.first_name = strNewFirstName
        if(strNewLastName):
            request.user.last_name = strNewLastName
        if(strNewPassword):
            request.user.set_password(strNewPassword)
        request.user.save()


        return Response({
            # give the serialized user
            "user":UserSerializer(request.user,context=self.get_serializer_context()).data,
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