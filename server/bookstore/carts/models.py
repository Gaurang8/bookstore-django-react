from django.db import models
from django.contrib.auth.models import User
from books.models import Book
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.user.username

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    book_price_total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.book.title
    
@receiver(post_save, sender=User)
def create_user_cart(sender, instance, created, **kwargs):
    if created:
        Cart.objects.create(user=instance)
        
@receiver(post_save, sender=CartItem)
def update_cart_total(sender, instance, created, **kwargs):
    if created:
        cart = instance.cart
        cart_item_total = instance.quantity * instance.book.price
        cart.amount += cart_item_total
        cart.save()

        instance.book_price_total = cart_item_total
        instance.save()