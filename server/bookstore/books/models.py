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
  