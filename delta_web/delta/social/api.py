from .models import Review

from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .serializers import SerializerReview

class ViewsetReview(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = SerializerReview

    def get_queryset(self):
        return Review.objects.all()
    
    def perform_create(self,serializer):
        print(self.request)
        serializer.save(author=self.request.user)