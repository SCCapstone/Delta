# Generated by Django 4.1.3 on 2022-11-16 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0019_alter_csvfile_unique_together'),
    ]

    operations = [
        migrations.AddField(
            model_name='csvfile',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]