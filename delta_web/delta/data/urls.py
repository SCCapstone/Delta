from django.urls import path

from rest_framework import routers
from .api import ViewsetCSVFile, ViewsetDataAccel,UploadCsvApiView, ViewsetPublicCsvFile

router = routers.DefaultRouter()
router.register('api/accel',ViewsetDataAccel,'DataAccels')
router.register('api/csv',ViewsetCSVFile,'CsvFiles')
router.register('api/public_csvs',ViewsetPublicCsvFile)

# for all non viewsets, need to add to regular urls
# https://stackoverflow.com/questions/56052906/django-rest-framework-type-object-x-has-no-attribute-get-extra-actions
urlpatterns  = [
    path('api/upload/csv/',UploadCsvApiView.as_view(),name='UploadCSV')
]

urlpatterns += router.urls