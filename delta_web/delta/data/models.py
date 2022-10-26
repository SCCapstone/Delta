from django.conf import settings
from django.db import models

# signal when the model is deleted
# see: https://stackoverflow.com/questions/71278989/how-to-call-a-function-when-you-delete-a-model-object-in-django-admin-page-or
from django.db.models.signals import post_delete
from django.dispatch import receiver

# TODO: Change to our custom user model.
from django.contrib.auth import get_user_model

# for file manip
import os

User = get_user_model()

# hold acceleration data
class DataAccel(models.Model):
    author = models.ForeignKey(
        User,related_name="data_accels",on_delete=models.CASCADE,
        null=True
    )
    file_path = models.CharField(max_length=300)
    timestamp = models.DateTimeField(auto_now_add=True)



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
    file_name = models.TextField(db_column="file_name",blank=False,null=False)
    # timestamp of creation
    timestamp= models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('author','file_path','file_name')

    def __str__(self):
        return self.file_path

# when delete the CSVFile model, should also delete the file in the directory
# see: https://stackoverflow.com/questions/71278989/how-to-call-a-function-when-you-delete-a-model-object-in-django-admin-page-or
@receiver(post_delete,sender=CSVFile)
def on_delete_csv(sender,instance,using,**kwargs):
    # delete the file
    if(os.path.exists(instance.file_path)):
        os.remove(instance.file_path)