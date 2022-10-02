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


class CSVFile(models.Model):
    # user who created the file
    author = models.ForeignKey(
        User,related_name="csv_files", on_delete = models.CASCADE,
        null=True
    )
    # SEE: https://stackoverflow.com/questions/53058631/foreignkey-object-has-no-attribute
    file_name= models.TextField(db_column='name',blank=False,null=False)
    url = models.FileField(db_column='csv_url',blank=True,null=True,upload_to='users/{}/csvs/{}'.format('CHANGE_ME',file_name))
    # timestamp of creation
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('author','file_name','url')

        managed = True
        db_table = 'CSVFile'