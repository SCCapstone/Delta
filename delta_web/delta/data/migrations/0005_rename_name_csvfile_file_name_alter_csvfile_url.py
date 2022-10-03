# Generated by Django 4.1.1 on 2022-10-02 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_csvfile_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='csvfile',
            old_name='name',
            new_name='file_name',
        ),
        migrations.AlterField(
            model_name='csvfile',
            name='url',
            field=models.FileField(blank=True, db_column='csv_url', null=True, upload_to='users/<django.db.models.fields.related.ForeignKey>/csvs/<django.db.models.fields.TextField>'),
        ),
    ]