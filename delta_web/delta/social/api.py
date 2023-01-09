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

    # get all of the user's created reviews
    def get_queryset(self):
        return self.request.user.review_set.all().order_by('-pub_date')
    
    def perform_create(self,serializer):
        serializer.save(author=self.request.user,file=CSVFile.objects.get(pk=self.request.data['file']))