from django.db import models
from django.contrib.auth.models import User

# simple profile
# https://www.youtube.com/watch?v=FdVuKt_iuSI

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,null=True)
    # TO DO, or just not do it
    bio = models.CharField(max_length = 255)

    def __str__(self):
        return '{} Profile'.format(self.user.username)