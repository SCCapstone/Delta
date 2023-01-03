from rest_framework import serializers
from .models import Review

from rest_framework.validators import UniqueTogetherValidator

class SerializerReview(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    class Meta:
        model = Review
        fields = [
            "title","author","author_username","text","pub_date","rating",'id'
        ]

        validators = [
            UniqueTogetherValidator(
                queryset = Review.objects.all(),
                fields=['author','title']
            )
        ]

    def get_author_username(self,obj):
        return obj.author.username