from rest_framework import serializers
from .models import (CSVFile,TagCsvFile)

from rest_framework.validators import UniqueTogetherValidator

# aggregation of csv reviews
from django.db.models import Avg

# serializers
from social.serializers import SerializerReview

class SerializerCSVFile(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    reviews = serializers.SerializerMethodField()
    # THIS MAY BE BETTER CALCULATED AS JUST AN ATTRIBUTE OF THE
    # CSV FILE MODEL ITSELF
    avg_rating = serializers.SerializerMethodField()
    # formated date
    formatted_date = serializers.SerializerMethodField()
    # number of reviews
    review_count = serializers.SerializerMethodField()
    # tags
    tags = serializers.SerializerMethodField()
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
    def get_author_username(self,obj):
        return obj.author.username
    
    def get_reviews(self,obj):
        return SerializerReview(obj.review_set.all().order_by('-pub_date'),many=True).data
    
    def get_avg_rating(self,obj):
        # note: probably better to store this int as a sum in the csv file
        if obj.review_set.count() == 0:
            return 0
        return obj.review_set.aggregate(Avg('rating'))['rating__avg']
    
    def get_formatted_date(self,obj):
        return obj.timestamp.strftime('%Y-%m-%d')
    
    def get_review_count(self,obj):
        return obj.review_set.count()
    
    def get_tags(self,obj):
        return SerializerTagCsvFile(obj.tag_set.all().order_by('-pub_date'),many=True).data

class SerializerTagCsvFile(serializers.ModelSerializer):

    class Meta:
        model = TagCsvFile
        fields = "__all__"