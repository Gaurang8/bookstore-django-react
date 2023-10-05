from rest_framework import serializers

from .models import Book , Category , Author , Publisher


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('name',)

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'
    
class PublisherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Publisher
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):

    category = CategorySerializer()
    author = AuthorSerializer()
    publisher = PublisherSerializer()

    class Meta:
        model = Book
        fields = '__all__'


    