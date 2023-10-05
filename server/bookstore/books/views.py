from django.shortcuts import render

from .serializers import *
from .models import *
from rest_framework.views import APIView

from rest_framework.response import Response

class BookView(APIView):
    def get(self , request):

        category_name = request.GET.get('category')
        print(category_name)
        if category_name:
            try:
                category = Category.objects.get(name = category_name)
                books = Book.objects.filter(category=category)
            except Category.DoesNotExist:
                return Response([])

        else:
            books = Book.objects.all()
        serializer = BookSerializer(books , many=True)
        return Response(serializer.data)

        
    
    def post(self , request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    


