from django.urls import path

from rest_framework import routers

from .api import ViewsetOrganizations

router = routers.DefaultRouter()
router.register('api/organization',ViewsetOrganizations,'Organizations')

urlpatterns = router.urls