# Generated by Django 5.0.1 on 2024-06-06 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Projects', '0008_alter_projectmembers_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='prd',
            field=models.FileField(blank=True, null=True, upload_to='project-prd/'),
        ),
    ]
