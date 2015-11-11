# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20151111_1442'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beer',
            name='url',
            field=models.URLField(verbose_name='Url'),
        ),
    ]
