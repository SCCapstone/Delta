from rest_framework import serializers
from .models import DataAccel

# Acceleration Data serializer
class SerializerDataAccel(serializers.ModelSerializer):
    class Meta:
        model = DataAccel
        fields = '__all__'