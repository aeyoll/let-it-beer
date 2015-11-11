# -*- coding: utf-8 -*-
import ratebeer
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer, BeerSerializer
from .models import Beer
import pprint


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class BeerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows beers to be viewed or edited.
    """
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer

def SearchView(request):
    query = request.POST.get('query', '')
    rb = ratebeer.RateBeer()
    results = rb.search(query)
    ret = []

    for result in results['beers']:
        # result._populate()
        ret.append(result.__dict__)

    return JsonResponse(ret, safe=False)
