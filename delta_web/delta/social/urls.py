from django.urls import path

from rest_framework import routers
from .api import ViewsetReview,ViewsetNotificationReview

router = routers.DefaultRouter()
router.register('api/review',ViewsetReview,'Reviews')
router.register('api/notification_review',ViewsetNotificationReview,"NotificationReviews")

urlpatterns = router.urls