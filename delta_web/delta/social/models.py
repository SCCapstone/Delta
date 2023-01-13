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
