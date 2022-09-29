# import necessary models
from .models import DataAccel
from .models import CSVFile

# files
from django.conf import settings as django_settings
import os

# import necessary rest_framework stuff
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser

# import necessary serializers
from .serializers import SerializerDataAccel

# data accel viewset
# create a full CRUD api w/o having to specify explict methods
class ViewsetDataAccel(viewsets.ModelViewSet):
    queryset = DataAccel.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SerializerDataAccel

    def get_queryset(self):
        return self.request.user.data_accels.all()
    
    def perform_create(self,serializer):
        serializer.save(author=self.request.user)

class UploadView(APIView):
    parser_classes = (FileUploadParser,)

    permission_classes = [
        permissions.IsAuthenticated
    ]

    # handle post requests
    def post(self,request):
        # get the file, or return None if nothing there
        dataFile = request.data.get('file',None)
        
        # TODO: BASED ON FILE EXTENSION SAVE AS DIFFERENT FORMATS
        print(str(dataFile).split('.'))

        strFilePath = os.path.join(django_settings.STATIC_ROOT,'users','csvs','{}.csv'.format(dataFile))

        print(strFilePath)

        # modelCSV = CSVFile(author = request.user,file_path=)

        if dataFile:
            return Response({"message":"File uploaded successfully"},status=200)
        else:
            return Response({"message":"Error upon uploading file"},status=400)