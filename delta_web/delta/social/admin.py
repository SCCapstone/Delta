########################
#
# Delta project.
#
# Authors:
# Lexington Whalen (@lxaw)
# Carter Marlowe (@Cmarlowe132)
# Vince Kolb-LugoVince (@vancevince) 
# Blake Seekings (@j-blake-s)
# Naveen Chithan (@nchithan)
#
# File name:
#
# Brief description:
#
from django.contrib import admin

from .models import (Review,NotificationReview,
Conversation, Message,NotificationMessage,NotificationNews,
NotificationWhatsHot
)

# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    fields = ['author','text','title','pub_date','active','rating']


class NotificationReviewAdmin(admin.ModelAdmin):
    fields = ['text','read','pub_date','sender','recipient','review','title']

class ConversationAdmin(admin.ModelAdmin):
    fields = ['title','other_user','author','pub_date']

class MessageAdmin(admin.ModelAdmin):
    fields = ['author','recipient','pub_date','convo','text']

class NotificationMessageAdmin(admin.ModelAdmin):
    fields = ['text','read','pub_date','sender','recipient','message','title']

class NotificationNewsAdmin(admin.ModelAdmin):
    fields = ['text','read','pub_date','recipient','title']

class NotificationWhatsHotAdmin(admin.ModelAdmin):
    fields = ['text','read','pub_date','recipient','title']

admin.site.register(Review,ReviewAdmin)
admin.site.register(NotificationReview,NotificationReviewAdmin)
admin.site.register(Conversation,ConversationAdmin)
admin.site.register(Message,MessageAdmin)
admin.site.register(NotificationMessage,NotificationMessageAdmin)
admin.site.register(NotificationWhatsHot,NotificationWhatsHotAdmin)
admin.site.register(NotificationNews,NotificationNewsAdmin)