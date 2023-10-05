from rest_framework import serializers

from .models import *
from books.serializers import *


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):

    cart = CartSerializer()
    book = BookSerializer()

    class Meta:
        model = CartItem
        fields = '__all__'

