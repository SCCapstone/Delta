# Generated by Django 4.1.1 on 2022-10-02 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0007_csvfile_strusername_alter_csvfile_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='csvfile',
            old_name='strUserName',
            new_name='str_user_name',
        ),
        migrations.AlterField(
            model_name='csvfile',
            name='url',
            field=models.FileField(blank=True, db_column='csv_url', null=True, upload_to='users/<django.db.models.fields.TextField>/csvs/<django.db.models.fields.TextField>'),
        ),
    ]