# Generated by Django 4.1.6 on 2023-02-08 19:26

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('data', '0027_alter_tagcsvfile_file'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='csvfile',
            unique_together={('author', 'file_name')},
        ),
    ]
