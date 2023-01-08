from django.contrib import admin

from .models import Review

# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    fields = ['author','text','title','pub_date','active','rating']

admin.site.register(Review,ReviewAdmin)