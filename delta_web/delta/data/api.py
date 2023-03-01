# import necessary models
from django.http import FileResponse
from .models import CSVFile, TagCsvFile
from rest_framework import status,renderers
from rest_framework.decorators import action

from pathlib import Path

import random
import string

# files
from django.conf import settings as django_settings
import os

# import necessary rest_framework stuff
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.parsers import MultiPartParser

# import orgs
from organizations.models import Organization

# import necessary serializers
from .serializers import SerializerCSVFile,SerializerTagCsvFile

# exceptions


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
        return CSVFile.objects.filter(is_public=True)

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
        super().partial_update(request,*args,**kwargs)
        obj = CSVFile.objects.get(id=kwargs['pk'])
        print(request.data)
        if('registered_organizations' in  request.data):
            for orgId in request.data['registered_organizations']:
                # check if org exists
                try:
                    orgObj = Organization.objects.get(pk=orgId)
                    obj.registered_organizations.add(orgObj)
                    obj.save()
                except Organization.DoesNotExist as e:
                    print(e)
                    pass
        if('tags' in request.data):
            # remove old tags
            obj.tag_set.all().delete()
            # create new tags
            for strTag in request.data['tags']:
                tag = TagCsvFile(file=obj,text=strTag)
                tag.save()

        return Response(self.get_serializer(obj).data)
    
    def retrieve(self,request,*args,**kwargs):
        obj_id = kwargs['pk']
        obj = CSVFile.objects.get(id=obj_id)
        # ONLY ALLOW USER TO SEE FILE IF THE FOLLOWING CONDITIONS ARE MEET
        # 1. File is public OR
        # 2. User owns file OR
        # 3. User is part of org with file
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
    # parser_classes = (MultiPartParser,)

    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = SerializerCSVFile

    # handle post requests
    def post(self,request,*args,**kwargs):
        # get the file, or return None if nothing there
        dataFile = request.data.get('file',None)

        if(dataFile):
            # create a random file name
            fileName = Path(str(dataFile)).stem

            # see https://stackoverflow.com/questions/45866307/python-and-django-how-to-use-in-memory-and-temporary-files
            strUserCsvFolder = 'static/users/{}/csvs'.format(request.user.username)

            # create dir if doesnt exist
            if not os.path.exists(strUserCsvFolder):
                os.makedirs(strUserCsvFolder)

            strFilePath = os.path.join(strUserCsvFolder,str(dataFile))

            # if a file already present, do not overwrite

            if(os.path.exists(strFilePath)):
                while(os.path.exists(strFilePath)):
                    strRandom = ''.join(random.choices(string.ascii_lowercase+string.digits,k=100))
                    strFilePath += "_"+ strRandom
                # finally add .csv
                strFilePath+=".csv"

            csvFile = None
            try:
                csvFile = CSVFile(author=request.user,file_path =strFilePath,file_name=fileName)
                csvFile.save()
            except Exception as e:
                return Response(data={"message":"{}".format(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            # if get thru the first try, know that the file is unique.
            # next try is to actually write the file
            try:
                with open(strFilePath,'wb+') as file:
                    for chunk in dataFile.chunks():
                        file.write(chunk)
                # file is now saved.
                return Response({
                    "csvFile":SerializerCSVFile(csvFile).data
                })
            except Exception as e:
                # delete the csvFile, something went wrong with writing
                csvFile.delete()
                return Response(data={"message":"{}".format(e)})

        else:
            return Response(data={"message":"Error upon uploading file"})

class ViewsetTagCsvFile(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SerializerTagCsvFile

    # never use this, just need for api to work
    def get_queryset(self):
        return TagCsvFile.objects.all()
    
    def create(self,request):
        # file is file id
        file = CSVFile.objects.get(pk=request.data.get('file'))
        # text is an array
        arrTags = request.data.get('tags')
        newTags = []
        for tag in arrTags:
            tag = TagCsvFile(file=file,text=tag)
            tag.save()
            newTags.append(tag)

        return Response(self.get_serializer(newTags,many=True).data)