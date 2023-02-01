from django.urls import path

from rest_framework import routers
from .api import ViewsetReview,ViewsetNotificationReview,ViewsetConversation,ViewsetMessage

router = routers.DefaultRouter()
router.register('api/review',ViewsetReview,'Reviews')
router.register('api/notification_review',ViewsetNotificationReview,"NotificationReviews")
router.register('api/conversation',ViewsetConversation,"Conversations")
router.register('api/message',ViewsetMessage,"Messages")

urlpatterns = router.urls