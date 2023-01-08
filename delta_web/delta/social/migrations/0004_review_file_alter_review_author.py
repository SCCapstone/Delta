# Generated by Django 4.1.4 on 2023-01-03 15:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0025_alter_csvfile_registered_organizations'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('social', '0003_alter_review_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='file',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='review_set', to='data.csvfile'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='review',
            name='author',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='review_set', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]