########################
#
# Delta project.
#
# Authors:
# Lexington Whalen (@lxaw)
# Carter Marlowe (@Cmarlowe132)
# Vince Kolb-LugoVince (@vancevince) 
# Blake Seekings (@j-blake-s)
# Naveen Chithan (@nchithan)
#
# File name:
#
# Brief description:
#
from django.urls import path

from rest_framework import routers

from .api import ViewsetOrganizations

router = routers.DefaultRouter()
router.register('api/organization',ViewsetOrganizations,'Organizations')

urlpatterns = router.urls