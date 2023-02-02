# Generated by Django 4.1.5 on 2023-02-02 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('customerProfile', '0001_initial'),
        ('coupon', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='coupon',
            name='customer_profiles',
            field=models.ManyToManyField(related_name='coupons_owned', to='customerProfile.customerprofile'),
        ),
    ]