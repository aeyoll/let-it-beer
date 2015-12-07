# -*- coding: utf-8 -*-
import ratebeer

from django.contrib.auth.models import User, Group
from django.http import JsonResponse

from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response

from .serializers import UserSerializer, GroupSerializer, BeerSerializer
from .models import Beer

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

    @detail_route(methods=['get'])
    def fetch_data(self, request, pk=None):
        rb = ratebeer.RateBeer()
        beer = self.get_object()
        fetched_beer = rb.beer(beer.url)

        beer.style_rating = fetched_beer['style_rating']
        beer.seasonal = fetched_beer['seasonal']
        beer.style = fetched_beer['style']
        beer.img_url = fetched_beer['img_url']
        beer.description = fetched_beer['description']
        beer.ibu = fetched_beer['ibu']
        beer.abv = fetched_beer['abv']
        beer._has_fetched = True

        serializer = BeerSerializer(data=beer.__dict__)

        if serializer.is_valid():
            beer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

def SearchView(request):
    query = request.POST.get('query', '')
    rb = ratebeer.RateBeer()
    results = rb.search(query)
    ret = []

    for result in results['beers']:
        ret.append(result.__dict__)

    return JsonResponse(ret, safe=False)
