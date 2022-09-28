from .models import DataAccel
from rest_framework import viewsets, permissions
from .serializers import SerializerDataAccel

# data accel viewset
# create a full CRUD api w/o having to specify explict methods
class ViewsetDataAccel(viewsets.ModelViewSet):
    queryset = DataAccel.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SerializerDataAccel

    def get_queryset(self):
        return self.request.user.data_accels.all()
    
    def perform_create(self,serializer):
        serializer.save(author=self.request.user)
