
from django.urls import path 
from .views import *

urlpatterns = [
    path('books/' , BookView.as_view() , name='book_list'),    
]
