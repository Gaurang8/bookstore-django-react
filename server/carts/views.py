from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *

class CartDetails(APIView):
    permission_classes = [IsAuthenticated]
    def get(self , request):
        user = request.user
        cart = Cart.objects.filter(user = user , ordered = False)
        if cart.exists():
            cart = cart[0]
            cart_items = CartItem.objects.filter(cart = cart)
            serializer = CartItemSerializer(cart_items , many=True)
            return Response(serializer.data)
        else:
            return Response({'message':"Cart is empty"})



    def post(self , request):
        data = request.data
        print(data)
        user = request.user
        cart = Cart.objects.get(user = user)
        book = Book.objects.get(id = data['book'])
        quantity = data['quantity']

        cart_item = CartItem.objects.create(cart = cart , book = book , quantity = quantity)
        cart_item.save()
        return Response({'message':"Item added to cart"})
    
    def delete(self , request):
        user = request.user
        Id = request.GET.get('id')
        cart = Cart.objects.get(user = user)
        cart_item = CartItem.objects.get(id = Id)
        cart_item.delete()

        return Response({'message':"Item deleted from cart"})
    
    def put(self , request):
        user = request.user
        Id = request.GET.get('id')
        quantity = request.GET.get('quantity')
        cart = Cart.objects.get(user = user)
        cart_item = CartItem.objects.get(id = Id)
        cart_item.quantity = quantity
        cart_item.save()
        return Response({'message':"Item quantity updated"})
