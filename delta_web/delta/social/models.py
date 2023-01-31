from django.db import models
from django.utils import timezone

from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator,MinValueValidator

from data.models import CSVFile


User = get_user_model()

# Create your models here.

# Reviews
# Add a review to a data set
# rn only csvs
class Review(models.Model):
    title = models.CharField(max_length=100,null=False)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="review_set",null=True)

    # foreign key to file 
    file = models.ForeignKey(CSVFile,on_delete=models.CASCADE,related_name = "review_set")

    text = models.CharField(max_length = 350)
    pub_date = models.DateTimeField(default = timezone.now)
    # for deactivating inappropriate reviews
    active = models.BooleanField(default=True)

    # the rating of the file
    # 0 means no rating present
    rating = models.PositiveSmallIntegerField(default = 0,validators=[MinValueValidator(0),MaxValueValidator(5)])

    class Meta:
        unique_together = ('author','file')
    
    def __str__(self):
        return self.title

# basic notification class
# used as parent for all other notifications
class BaseNotification(models.Model):
    text = models.CharField(max_length=300,null=False)
    read = models.BooleanField(default=False)
    pub_date = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True

# notifications that relate to a review
class NotificationReview(BaseNotification):
    # sender of notification, ie in the case of a review being created, 
    # the sender is the creator of the review and the recipient is the csv file
    # owner
    sender = models.ForeignKey(User,on_delete=models.CASCADE,null=True,related_name="sender_notification_post_set")
    # here null is false as you always need a recipient for a notification
    recipient = models.ForeignKey(User,on_delete=models.CASCADE,null=False,related_name="recipient_notification_post_set")

    review = models.ForeignKey(Review,on_delete=models.CASCADE,related_name="notification_post_set",null=False)

    def __str__(self):
        return "Notification for review {}".format(Review.title)


# Conversations
# these are like chat rooms.
class Conversation(models.Model):
    title = models.CharField(max_length = 200,null=False,blank=False)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="author_conversation_set")
    # for now only one other user
    other_user = models.ForeignKey(User,related_name="participant_conversation_set",on_delete=models.CASCADE)
    pub_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

# Messages
class Message(models.Model):
    # person who wrote message
    author = models.ForeignKey(User,on_delete = models.CASCADE,related_name="author_message_set")
    # text of message
    text = models.CharField(max_length=255)
    # recipient of message
    recipient = models.ForeignKey(User,on_delete=models.CASCADE,related_name="recipient_message_set")
    # when sent
    pub_date = models.DateTimeField(default=timezone.now)
    # conversation it is under
    convo = models.ForeignKey(Conversation,on_delete = models.CASCADE,related_name="convo_message_set")

    def __str__(self):
        return self.text