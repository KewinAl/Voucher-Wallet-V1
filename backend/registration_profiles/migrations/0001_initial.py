# Generated by Django 4.1.5 on 2023-02-08 15:57

from django.db import migrations, models
import registration_profiles.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=registration_profiles.models.code_generator, max_length=5)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
    ]
