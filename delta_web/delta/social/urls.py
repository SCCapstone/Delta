from django.urls import path

from rest_framework import routers
from .api import ViewsetReview,ViewsetNotificationReview,ViewsetConversation

router = routers.DefaultRouter()
router.register('api/review',ViewsetReview,'Reviews')
router.register('api/notification_review',ViewsetNotificationReview,"NotificationReviews")
router.register('api/conversation',ViewsetConversation,"Conversations")

urlpatterns = router.urls