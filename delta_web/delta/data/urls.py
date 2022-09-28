from django.urls import path

from rest_framework import routers
from .api import ViewsetDataAccel,UploadView

router = routers.DefaultRouter()
router.register('api/accel',ViewsetDataAccel,'DataAccels')

# for all non viewsets, need to add to regular urls
# https://stackoverflow.com/questions/56052906/django-rest-framework-type-object-x-has-no-attribute-get-extra-actions
urlpatterns  = [
    path('api/upload/',UploadView.as_view(),name='FileUpload')
]


urlpatterns = router.urls