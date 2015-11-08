# -*- coding: utf-8 -*-
from django.contrib import admin
from .models import Beer

class BeerAdmin(admin.ModelAdmin):
    fields = ['name', 'url']
    search_fields = ['name', 'url']

admin.site.register(Beer, BeerAdmin)
