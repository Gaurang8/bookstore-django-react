from django.urls import path 
from .views import *


urlpatterns = [
    path('cartdetails/' , CartDetails.as_view() , name='cart_details'),
]
