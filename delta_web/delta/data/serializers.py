from rest_framework import serializers
from .models import DataAccel,CSVFile

# Acceleration Data serializer
class SerializerDataAccel(serializers.ModelSerializer):
    class Meta:
        model = DataAccel
        fields = '__all__'

# this is a csv file serializer
class SerializerCSVFile(serializers.ModelSerializer):
    class Meta:
        model = CSVFile
        fields = '__all__'