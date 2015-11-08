# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20151106_2127'),
    ]

    operations = [
        migrations.AddField(
            model_name='beer',
            name='url',
            field=models.CharField(default='', max_length=200, verbose_name='Url'),
            preserve_default=False,
        ),
    ]
