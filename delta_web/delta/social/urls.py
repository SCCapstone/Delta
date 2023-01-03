from django.urls import path

from rest_framework import routers
from .api import ViewsetReview

router = routers.DefaultRouter()
router.register('api/review',ViewsetReview,'Reviews')

urlpatterns = router.urls