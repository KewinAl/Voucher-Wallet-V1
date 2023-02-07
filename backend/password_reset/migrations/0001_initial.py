# Generated by Django 4.1.5 on 2023-02-07 12:02

from django.db import migrations, models
import password_reset.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PasswordReset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=password_reset.models.code_generator, max_length=5)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
    ]
