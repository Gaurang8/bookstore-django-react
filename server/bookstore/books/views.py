from django.shortcuts import render

from .serializers import *
from .models import *
from rest_framework.views import APIView

from rest_framework.response import Response

class BookView(APIView):
    def get(self , request):
        books = Book.objects.all()
        serializer = BookSerializer(books , many=True)
        return Response(serializer.data)
    
    def post(self , request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)



