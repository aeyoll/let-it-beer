# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20151111_1444'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beer',
            name='url',
            field=models.CharField(max_length=200, verbose_name='Url'),
        ),
    ]
