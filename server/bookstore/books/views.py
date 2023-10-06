from django.shortcuts import render

from .serializers import *
from .models import *
from rest_framework.views import APIView

from rest_framework.response import Response
from django.db.models import Q

class BookView(APIView):
    def get(self, request):
        category_names = request.GET.get('category','').split(',')
        rating = request.GET.get('rating')

        books = Book.objects.all()

        if category_names != ['']:
            books = books.filter(category__name__in=category_names)
            

        if rating is not None:
            try:
                rating = int(rating)
                books = books.filter(rating__gte=rating)
            except ValueError:
                pass

        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

        
    
    def post(self , request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    


