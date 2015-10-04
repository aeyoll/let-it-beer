# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext as _

class Beer(models.Model):
    class Meta:
        verbose_name = _('Beer')
        verbose_name_plural = _('Beers')

    name = models.CharField(_('Name'), max_length=200)

    def __unicode__(self):
        return self.name