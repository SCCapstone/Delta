# Generated by Django 4.1.3 on 2022-11-18 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0004_alter_organization_following_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='organization',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
