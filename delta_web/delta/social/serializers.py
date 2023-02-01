from rest_framework import serializers
from .models import Review,NotificationReview,Conversation,Message

from rest_framework.validators import UniqueTogetherValidator

# Serializer for review class
class SerializerReview(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    # to get the user who recieved the review
    recipient_id = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = "__all__"

        validators = [
            UniqueTogetherValidator(
                queryset = Review.objects.all(),
                fields=['author','title']
            )
        ]

    def get_author_username(self,obj):
        return obj.author.username

    def get_formatted_date(self,obj):
        return obj.pub_date.strftime('%Y-%m-%d')

    def get_recipient_id(self,obj):
        return obj.file.author.id

# serializer for review notification class
class SerializerNotificationReview(serializers.ModelSerializer):
    sender_username = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    file_id = serializers.SerializerMethodField()
    class Meta:
        model = NotificationReview
        fields = "__all__"

    def get_sender_username(self,obj):
        return obj.sender.username
    def get_formatted_date(self,obj):
        return obj.pub_date.strftime('%Y-%m-%d')
    def get_file_id(self,obj):
        return obj.review.file.id

class SerializerConversation(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    other_user_username= serializers.SerializerMethodField()
    messages = serializers.SerializerMethodField()

    class Meta:
        model = Conversation
        fields = "__all__"
    
    def get_author_username(self,obj):
        return obj.author.username

    def get_other_user_username(self,obj):
        return obj.other_user.username
    
    def get_messages(self,obj):
        return SerializerMessage(obj.convo_message_set.all(),many=True).data
    
class SerializerMessage(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    recipient_username = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = "__all__"

    def get_author_username(self,obj):
        return obj.author.username

    def get_recipient_username(self,obj):
        return obj.recipient.username

    def get_formatted_date(self,obj):
        return obj.pub_date.strftime('%H:%M, %Y-%m-%d')