# import necessary models
from .models import DataAccel
from .models import CSVFile
from rest_framework import status

from pathlib import Path

# files
from django.conf import settings as django_settings
import os

# import necessary rest_framework stuff
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser

# import necessary serializers
from .serializers import SerializerCSVFile, SerializerDataAccel

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

class ViewsetCSVFile(viewsets.ModelViewSet):
    queryset = CSVFile.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SerializerCSVFile

    def get_queryset(self):
        return self.request.user.csv_files.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    def retrieve(self,*args,**kwargs):
        obj_id = kwargs['pk']
        obj = CSVFile.objects.get(id=obj_id)
        serialized = self.get_serializer(obj)
        print(serialized.data)
        return Response(serialized.data)

###################
#
# TO DO [10/03/22]
# WHEN DELETE A USER, DELETE ALL OF THEIR FOLDERS!
# OR COULD WRITE A CLEAN UP SCRIPT.
# THIS IS CURRENTLY HANDLED IN MODELS.PY AS A SIGNAL.
# see https://stackoverflow.com/questions/71278989/how-to-call-a-function-when-you-delete-a-model-object-in-django-admin-page-or
# 
###################
class UploadCsvApiView(APIView):
    parser_classes = (FileUploadParser,)

    permission_classes = [
        permissions.IsAuthenticated
    ]

    # handle post requests
    def post(self,request,format='csv'):

        # get the file, or return None if nothing there
        dataFile = request.data.get('file',None)
        
        if(dataFile):

            # see https://stackoverflow.com/questions/45866307/python-and-django-how-to-use-in-memory-and-temporary-files
            strUserCsvFolder = 'static/users/{}/csvs'.format(request.user.username)

            # create dir if doesnt exist
            if not os.path.exists(strUserCsvFolder):
                os.makedirs(strUserCsvFolder)

            strFilePath = os.path.join(strUserCsvFolder,str(dataFile))
            
            # first try is just to see if this is a unique user+filepath combo
            csvFile = None
            try:
                csvFile = CSVFile(author=request.user,file_path = strFilePath,file_name=Path(str(dataFile)).stem)
                csvFile.save()
            except Exception as e:
                return Response(data={"message":e},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            # if get thru the first try, know that the file is unique.
            # next try is to actually write the file
            try:
                with open(strFilePath,'wb+') as file:
                    for chunk in dataFile.chunks():
                        file.write(chunk)
                # file is now saved.
                return Response(data ={"message":"CSV successfully saved."})
            except Exception as e:
                # delete the csvFile, something went wrong with writing
                csvFile.delete()
                return Response(data={"message":e},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        else:
            return Response(data={"message":"Error upon uploading file"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)