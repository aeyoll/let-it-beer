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

    def __unicode__(self):
        return self.name
