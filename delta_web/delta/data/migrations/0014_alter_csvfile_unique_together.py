# Generated by Django 4.0.5 on 2022-10-03 12:44

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('data', '0013_alter_csvfile_url'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='csvfile',
            unique_together={('author', 'file_name')},
        ),
    ]
