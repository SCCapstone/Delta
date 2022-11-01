# Generated by Django 4.1.1 on 2022-10-30 17:45

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('organizations', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='organization',
            name='following_users',
            field=models.ManyToManyField(related_name='followed_organizations', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='organization',
            name='key',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]
