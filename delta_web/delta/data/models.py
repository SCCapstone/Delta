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
    author = models.ForeignKey(
        User,related_name="csv_files", on_delete = models.CASCADE,
        null=True
    )
    file_path = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
