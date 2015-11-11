# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20151111_1444'),
    ]

    operations = [
        migrations.AddField(
            model_name='beer',
            name='abv',
            field=models.FloatField(null=True, verbose_name='Alcohol percentage', blank=True),
        ),
        migrations.AddField(
            model_name='beer',
            name='description',
            field=models.TextField(null=True, verbose_name='Description', blank=True),
        ),
        migrations.AddField(
            model_name='beer',
            name='ibu',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='IBU', blank=True),
        ),
        migrations.AddField(
            model_name='beer',
            name='img_url',
            field=models.URLField(null=True, verbose_name='Image url', blank=True),
        ),
        migrations.AddField(
            model_name='beer',
            name='seasonal',
            field=models.CharField(max_length=200, null=True, verbose_name='Seasonal', blank=True),
        ),
        migrations.AddField(
            model_name='beer',
            name='style',
            field=models.CharField(max_length=200, null=True, verbose_name='Style', blank=True),
        ),
        migrations.AddField(
            model_name='beer',
            name='style_rating',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='Style rating', blank=True),
        ),
    ]
