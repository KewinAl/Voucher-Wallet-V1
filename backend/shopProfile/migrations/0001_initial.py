# Generated by Django 4.1.5 on 2023-02-10 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ShopProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=100, null=True)),
                ('link', models.URLField(blank=True, null=True)),
                ('name', models.CharField(max_length=100)),
                ('shop_logo', models.ImageField(blank=True, null=True, upload_to='shop_logos/')),
            ],
        ),
    ]
