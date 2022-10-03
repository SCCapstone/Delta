from unittest.util import _MAX_LENGTH
from django.conf import settings
from django.db import models

# TODO: Change to our custom user model.
from django.contrib.auth import get_user_model

User = get_user_model()

# hold acceleration data
class DataAccel(models.Model):
    author = models.ForeignKey(
        User,related_name="data_accels",on_delete=models.CASCADE,
        null=True
    )
    file_path = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


# wrapper for CSV file.
# NOTE: if ever change directory structure, will have to update every file.
# this could get annoying!
class CSVFile(models.Model):
    # user who created the file
    author = models.ForeignKey(
        User,related_name="csv_files", on_delete = models.CASCADE,
        null=True
    )
    # SEE: https://stackoverflow.com/questions/53058631/foreignkey-object-has-no-attribute
    file_path= models.TextField(db_column='file_path',blank=False,null=False)
    # timestamp of creation
    timestamp= models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('author','file_path')