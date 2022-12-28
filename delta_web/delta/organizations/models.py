from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

# users cannot create their own organizations.
# 
class Organization(models.Model):
    # creator of the organization
    author = models.ForeignKey(
        User, related_name='created_organizations', on_delete=models.CASCADE,
        null = True
    )
    timestamp = models.DateTimeField(auto_now_add = True)

    name = models.CharField(max_length = 300)

    key = models.CharField(max_length=100)

    # TO DO: 
    # ADD REGISTERED AND FOLLOWING
    # JUST BECAUSE FOLLOWING DOESNT MEAN REGISTERED
    following_users = models.ManyToManyField(User,related_name="followed_organizations",blank=True)

    # TODO: 
    # add a way for users to be a part of the organization

    description = models.TextField(blank=True,null=True)
    
    # TODO:
    # add a code so that you can only join if know the code
    # or some other method of entry
    # add functions for this as well



    