# Generated by Django 4.0.5 on 2022-10-03 12:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0015_alter_csvfile_options_alter_csvfile_unique_together_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='csvfile',
            old_name='created_at',
            new_name='timestamp',
        ),
    ]