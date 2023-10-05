from django.db import models
from django.contrib.auth.models import User
from books.models import Book
from django.db.models.signals import post_save
from django.dispatch import receiver
from decimal import Decimal

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
    
    def save(self, *args, **kwargs):

        quantity_decimal = Decimal(str(self.quantity))
        book_price_decimal = Decimal(str(self.book.price))

        self.book_price_total = quantity_decimal * book_price_decimal
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.cart.amount -= self.book_price_total
        self.cart.save()
        super().delete(*args, **kwargs)
    


@receiver(post_save, sender=User)
def create_user_cart(sender, instance, created, **kwargs):
    if created:
        Cart.objects.create(user=instance)
        


@receiver(post_save, sender=CartItem)
def update_cart_total(sender, instance, created, **kwargs):

    if not created:
        cart = instance.cart
        cart_items = CartItem.objects.filter(cart=cart)
        cart.amount = sum(item.book_price_total for item in cart_items)
        cart.save()