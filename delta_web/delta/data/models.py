from django.conf import settings
from django.db import models


# hold acceleration data
class DataAccel(models.Model):
    # author = models.ForeignKey(
    #     settings.AUTH_USER_MODEL,
    #     on_delete=models.CASCADE
    # )
    file_path = models.CharField(max_length=300)
    # created_at = models.DateTimeField(auto_now_add=True)
