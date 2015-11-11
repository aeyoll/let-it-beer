# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_beer_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='beer',
            name='_has_fetched',
            field=models.BooleanField(default=False, verbose_name='Has fetched'),
        ),
        migrations.AddField(
            model_name='beer',
            name='num_ratings',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='Number of ratings', blank=True),
        ),
        migrations.AddField(
            model_name='beer',
            name='overall_rating',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='Overall rating', blank=True),
        ),
        migrations.AlterField(
            model_name='beer',
            name='url',
            field=models.SlugField(max_length=200, verbose_name='Url'),
        ),
    ]
