from .models import Review

from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .serializers import SerializerReview,SerializerNotificationReview
from data.models import CSVFile

from rest_framework.decorators import action
from rest_framework.response import Response

# review api 
class ViewsetReview(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SerializerReview

    # get all of the user's created reviews
    def get_queryset(self):
        return self.request.user.review_set.all().order_by('-pub_date')
    
    def perform_create(self,serializer):
        serializer.save(author=self.request.user,file=CSVFile.objects.get(pk=self.request.data['file']))

# notification API
class ViewsetNotificationReview(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SerializerNotificationReview

    def get_queryset(self):
        return self.request.user.recipient_notification_post_set.all().order_by('-pub_date')
    
    def perform_create(self,serializer):
        serializer.save()
    
    # get all unread posts
    @action(methods=['get'],detail=False)
    def get_unread(self,request):
        return Response(SerializerNotificationReview(self.request.user.recipient_notification_post_set.filter(read=False).order_by('-pub_date'),many=True).data)
    
    @action(methods=['get'],detail=True)
    def perform_read(self,*args,**kwargs):
        instance = self.get_object()
        instance.read = True
        instance.save()
        return Response(self.get_serializer(instance).data)