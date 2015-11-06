# -*- coding: utf-8 -*-
from django.contrib import admin
from .models import Beer

class BeerAdmin(admin.ModelAdmin):
    fields = ['name']
    search_fields = ['name']

admin.site.register(Beer, BeerAdmin)
