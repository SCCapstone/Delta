from django.contrib import admin

from .models import Review,NotificationReview,Conversation

# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    fields = ['author','text','title','pub_date','active','rating']


class NotificationReviewAdmin(admin.ModelAdmin):
    fields = ['text','read','pub_date','sender','recipient','review']

class ConversationAdmin(admin.ModelAdmin):
    fields = ['title','other_user','author','pub_date']

admin.site.register(Review,ReviewAdmin)
admin.site.register(NotificationReview,NotificationReviewAdmin)
admin.site.register(Conversation,ConversationAdmin)