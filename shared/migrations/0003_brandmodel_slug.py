# Generated by Django 4.2.3 on 2023-07-23 06:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shared', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='brandmodel',
            name='slug',
            field=models.SlugField(blank=True, max_length=130, null=True, unique=True),
        ),
    ]
