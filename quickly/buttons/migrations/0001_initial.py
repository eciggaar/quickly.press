# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-05-17 12:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EmergencyButtonClient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.TextField()),
                ('last_name', models.TextField()),
                ('address', models.TextField()),
                ('phone_number', models.CharField(max_length=15)),
                ('button_uuid', models.CharField(max_length=255)),
                ('language', models.CharField(max_length=5)),
            ],
        ),
    ]
