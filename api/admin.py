# -*- coding: utf-8 -*-
from django.contrib import admin
from .models import Beer

class BeerAdmin(admin.ModelAdmin):
    fields = ['name', 'url', 'num_ratings', 'overall_rating', 'seasonal', 'style', 'img_url', 'description', 'ibu', 'abv', '_has_fetched']
    search_fields = ['name', 'url', 'num_ratings', 'overall_rating', 'seasonal', 'style', 'img_url', 'description', 'ibu', 'abv', '_has_fetched']

admin.site.register(Beer, BeerAdmin)
