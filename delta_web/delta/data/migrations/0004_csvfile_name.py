# Generated by Django 4.1.1 on 2022-10-02 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_alter_csvfile_options_csvfile_url_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='csvfile',
            name='name',
            field=models.TextField(db_column='name', default=1, unique=True),
            preserve_default=False,
        ),
    ]