from .models import DataAccel
from rest_framework import viewsets, permissions
from .serializers import SerializerDataAccel

# data accel viewset
# create a full CRUD api w/o having to specify explict methods
class ViewsetDataAccel(viewsets.ModelViewSet):
    queryset = DataAccel.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SerializerDataAccel