# import necessary models
from django.http import FileResponse
from .models import DataAccel
from .models import CSVFile
from rest_framework import status,renderers
from rest_framework.decorators import action

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
#https://stackoverflow.com/questions/38697529/how-to-return-generated-file-download-with-django-rest-framework
class PassthroughRenderer(renderers.BaseRenderer):
    media_type = 'text/csv'
    format = None
    def render(self,data,accepted_media_type=None,renderer_context=None):
        return data

# For dealing with public viewing of csv files
class ViewsetPublicCsvFile(viewsets.ModelViewSet):
    queryset = CSVFile.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SerializerCSVFile

    def get_queryset(self):
        return self.queryset
    
    @action(methods=['get'],detail=True,renderer_classes=(PassthroughRenderer,))
    def download(self,*args,**kwargs):
        instance = self.get_object()
        with open(instance.file_path,'rb') as file:
            return Response(
                file.read(),
                headers = {"Content-Disposition":'attachment; filename={}'.format(instance.file_name)},
                content_type="text/csv",
            )


class ViewsetCSVFile(viewsets.ModelViewSet):
    queryset = CSVFile.objects.all()

    # TO DO: 
    # UPDATE THE PERMISSION CLASSES
    # Right now anyone can view CSV files. 
    # We should make viewable only if csv files are marked as public.
    # Could mark for public for all or for organization.


    # TO DO: 
    # UNSURE ABOUT SECURITY HERE.
    # It may be possible to call api methods at an index other than yours to update
    # other users data. Please note this possiblity!

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SerializerCSVFile

    def get_queryset(self):
        return self.request.user.csv_files.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    def partial_update(self, request, *args, **kwargs):
        # can only update file name
        obj = CSVFile.objects.get(id=kwargs['pk'])
        obj.file_name = request.data['file_name']
        try:
            obj.save()
        except Exception as e:
            print(e)
            return Response(data={"message":"Error with file name"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return super().partial_update(request, *args, **kwargs)
    
    def retrieve(self,request,*args,**kwargs):
        obj_id = kwargs['pk']
        obj = CSVFile.objects.get(id=obj_id)
        serialized = self.get_serializer(obj)
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
        print(request)
        
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