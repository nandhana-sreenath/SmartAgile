# Generated by Django 5.0.1 on 2024-05-31 05:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tasks', '0007_alter_task_status'),
        ('Users', '0005_alter_userprofile_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='assigned_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='task_assignee', to='Users.userprofile'),
        ),
        migrations.AddField(
            model_name='task',
            name='attachments',
            field=models.FileField(blank=True, null=True, upload_to='task-attachments/'),
        ),
    ]