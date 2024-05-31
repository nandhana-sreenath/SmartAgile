# Generated by Django 5.0.1 on 2024-05-31 02:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Projects', '0008_alter_projectmembers_profile'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChatRoom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('project', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='chat_room', to='Projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(blank=True, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='message-attachments/')),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
                ('chatroom', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='messages', to='Chats.chatroom')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sender_messages', to='Projects.projectmembers')),
            ],
        ),
    ]
