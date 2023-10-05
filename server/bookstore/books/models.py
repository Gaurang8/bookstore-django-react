from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Author(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100 , blank=True , null=True)
    language = models.CharField(max_length=100 , blank=True , null=True) 

    def __str__(self):
        return self.name
    
class Publisher(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100 , blank=True , null=True)

    def __str__(self):
        return self.name
    
class Book(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10 , decimal_places=2)
    author = models.ForeignKey(Author , on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher , on_delete=models.CASCADE)
    category = models.ForeignKey(Category , on_delete=models.CASCADE)
    cover = models.ImageField(upload_to='cover/' , blank=True , null=True)
    rating = models.IntegerField(blank=True , null=True)

    def __str__(self):
        return self.title
    
# class Review(models.Model):
#     book = models.ForeignKey(Book , on_delete=models.CASCADE)
#     review = models.TextField()

#     def __str__(self):
#         return self.review

# class Order(models.Model):
#     book = models.ForeignKey(Book , on_delete=models.CASCADE)
#     quantity = models.IntegerField()
#     customer_name = models.CharField(max_length=100)
#     customer_email = models.EmailField()
#     customer_phone = models.CharField(max_length=100)
#     customer_address = models.CharField(max_length=100)
#     date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.customer_name
    
# class Contact(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()v
#     phone = models.CharField(max_length=100)
#     message = models.TextField()

#     def __str__(self):
#         return self.name



