# Generated by Django 4.1.3 on 2022-12-17 10:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='client_details',
        ),
    ]
