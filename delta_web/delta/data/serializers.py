from rest_framework import serializers
from .models import DataAccel,CSVFile

from rest_framework.validators import UniqueTogetherValidator

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
        validators = [
            UniqueTogetherValidator(
                queryset=CSVFile.objects.all(),
                fields = ['author','file_path']
            )
        ]