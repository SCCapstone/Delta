# Generated by Django 4.1.6 on 2023-02-17 20:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0002_organization_description_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('data', '0002_csvfile_tagcsvfile_delete_dataaccel'),
    ]

    operations = [
        # migrations.createmodel(
        #     name='csvfile',
        #     fields=[
        #         ('id', models.bigautofield(auto_created=true, primary_key=true, serialize=false, verbose_name='id')),
        #         ('file_path', models.textfield(db_column='file_path')),
        #         ('file_name', models.textfield(db_column='file_name')),
        #         ('timestamp', models.datetimefield(auto_now_add=true)),
        #         ('description', models.textfield(blank=true, default='')),
        #         ('is_public', models.booleanfield(default=false)),
        #         ('is_public_orgs', models.booleanfield(default=false)),
        #         ('author', models.foreignkey(null=true, on_delete=django.db.models.deletion.cascade, related_name='csv_files', to=settings.auth_user_model)),
        #         ('registered_organizations', models.manytomanyfield(blank=true, related_name='uploaded_files', to='organizations.organization')),
        #     ],
        #     options={
        #         'unique_together': {('author', 'file_name')},
        #     },
        # ),
        # migrations.createmodel(
        #     name='tagcsvfile',
        #     fields=[
        #         ('id', models.bigautofield(auto_created=true, primary_key=true, serialize=false, verbose_name='id')),
        #         ('text', models.charfield(max_length=100)),
        #         ('pub_date', models.datetimefield(default=django.utils.timezone.now)),
        #         ('file', models.foreignkey(on_delete=django.db.models.deletion.cascade, related_name='tag_set', to='data.csvfile')),
        #     ],
        #     options={
        #         'abstract': false,
        #     },
        # ),
        # migrations.deletemodel(
        #     name='dataaccel',
        # ),
    ]
