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
                # dont allow change of file path by user
                # server does that on its own
                # NOTE: 
                # CHANGING OF FILE NAMES EACH TIME COULD BE A VERY SLOW OPERATION!
                fields = ['author','file_name','file_path']
            )
        ]