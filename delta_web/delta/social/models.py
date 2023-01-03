from django.db import models
from django.utils import timezone

from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator,MinValueValidator

User = get_user_model()

# Create your models here.

# Reviews
# Add a review to a data set
# rn only csvs
class Review(models.Model):
    title = models.CharField(max_length=100,null=False)
    # null true so that we can use api.
    # if did not have null true, would need to pass id.
    # TODO: there may be a better way
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="review_set",null=True)
    text = models.CharField(max_length = 350)
    pub_date = models.DateTimeField(default = timezone.now)
    # for deactivating inappropriate reviews
    active = models.BooleanField(default=True)

    # the rating of the file
    # 0 means no rating present
    rating = models.PositiveSmallIntegerField(default = 0,validators=[MinValueValidator(0),MaxValueValidator(5)])

    class Meta:
        unique_together = [['author','title']]
    
    def __str__(self):
        return self.title
