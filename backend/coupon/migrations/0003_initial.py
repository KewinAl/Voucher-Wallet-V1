# Generated by Django 4.1.5 on 2023-02-07 12:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('coupon', '0002_initial'),
        ('shopProfile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='coupon',
            name='shop_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='coupons_created', to='shopProfile.shopprofile'),
        ),
        migrations.AlterUniqueTogether(
            name='couponcode',
            unique_together={('coupon', 'customer_profile')},
        ),
    ]
