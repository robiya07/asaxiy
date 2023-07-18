from django.db import models

from abstracts.models import BaseBookProductModel


# Create your models here.
class BrandModel(models.Model):
    name = models.CharField(max_length=100, unique=True)
    logo = models.ImageField(upload_to='images/brand/')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'
        db_table = 'brands'


class ProductModel(BaseBookProductModel):
    brand = models.ForeignKey(BrandModel, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        db_table = 'products'

