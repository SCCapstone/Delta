# Generated by Django 4.1.3 on 2022-11-16 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0020_csvfile_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='csvfile',
            name='is_public',
            field=models.BooleanField(default=False),
        ),
    ]
