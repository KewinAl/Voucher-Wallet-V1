# Generated by Django 4.1.5 on 2023-02-03 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customerProfile', '0002_initial'),
        ('coupon', '0003_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coupon',
            name='customer_profiles',
            field=models.ManyToManyField(blank=True, related_name='coupons_owned', to='customerProfile.customerprofile'),
        ),
    ]