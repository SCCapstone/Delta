from .models import Review

from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .serializers import SerializerReview
from data.models import CSVFile

class ViewsetReview(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SerializerReview

    def get_queryset(self):
        return self.request.user.review_set.all()
    
    def perform_create(self,serializer):
        serializer.save(author=self.request.user,file=CSVFile.objects.get(pk=self.request.data['file']))