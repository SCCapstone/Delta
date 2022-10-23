from rest_framework import serializers
from .models import DataAccel,CSVFile

# Acceleration Data serializer
class SerializerDataAccel(serializers.ModelSerializer):
    class Meta:
        model = DataAccel
        fields = '__all__'

class SerializerCSVFile(serializers.ModelSerializer):
    class Meta:
        model = CSVFile
        fields = '__all__'