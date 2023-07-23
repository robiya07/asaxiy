from django.db import models
from abstracts.models import BaseBookProductModel
from shared.models.book import BookModel
from shared.models.product import ProductModel


# Create your models here.
class BigProductModel(BaseBookProductModel):
    prod = models.OneToOneField(ProductModel, on_delete=models.CASCADE, null=True, blank=True)
    book = models.OneToOneField(BookModel, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        verbose_name = 'Big Product'
        verbose_name_plural = 'Big Products'
        db_table = 'big_products'

    def __str__(self):
        return self.model
