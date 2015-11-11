# -*- coding: utf-8 -*-
import uuid
from django.db import models
from django.utils.translation import ugettext as _

class Beer(models.Model):
    class Meta:
        verbose_name = _('Beer')
        verbose_name_plural = _('Beers')

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_('Name'), max_length=200)
    url = models.CharField(_('Url'), max_length=200)
    num_ratings = models.PositiveSmallIntegerField(_('Number of ratings'), null=True, blank=True)
    overall_rating = models.PositiveSmallIntegerField(_('Overall rating'), null=True, blank=True)
    style_rating = models.PositiveSmallIntegerField(_('Style rating'), null=True, blank=True)
    seasonal = models.CharField(_('Seasonal'), null=True, blank=True, max_length=200)
    style = models.CharField(_('Style'), null=True, blank=True, max_length=200)
    img_url = models.URLField(_('Image url'), null=True, blank=True, max_length=200)
    description = models.TextField(_('Description'), null=True, blank=True)
    ibu = models.PositiveSmallIntegerField(_('IBU'), null=True, blank=True)
    abv = models.FloatField(_('Alcohol percentage'), null=True, blank=True)
    _has_fetched = models.BooleanField(_('Has fetched'), default=False)

    def __unicode__(self):
        return self.name
