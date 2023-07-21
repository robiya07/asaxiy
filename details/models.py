from django.db import models
from eav.models import Attribute
from mptt.models import MPTTModel, TreeForeignKey
from datetime import timedelta
from abstracts.models import BaseSlugModel, BaseProductBookRelationModel, BaseSharedRelationModel, BaseDateTimeModel
from books.models import BookModel
from products.models import ProductModel


class CategoryModel(MPTTModel, BaseSlugModel):
    name = models.CharField(max_length=100)  # unique=True
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    image = models.ImageField(upload_to='images/category/')

    class MPTTMeta:
        order_insertion_by = ['name']

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        db_table = 'categories'


class ImageModel(BaseProductBookRelationModel):
    image = models.ImageField(upload_to='images/products_list')

    class Meta:
        verbose_name = 'Image'
        verbose_name_plural = 'Images'
        db_table = 'images'


class ReviewModel(BaseSharedRelationModel, BaseDateTimeModel):
    description = models.TextField(null=True, blank=True)
    rating = models.PositiveSmallIntegerField(default=0)

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'
        db_table = 'reviews'

    def __str__(self):
        return self.user.username


class DiscountModel(models.Model):
    product = models.OneToOneField(ProductModel, on_delete=models.CASCADE)
    book = models.OneToOneField(BookModel, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()
    is_daily = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.is_daily:
            self.end_date = self.start_date + timedelta(days=1)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.product.model

    class Meta:
        verbose_name = 'Discount'
        verbose_name_plural = 'Discounts'
        db_table = 'discounts'


class CharacteristicsModel(Attribute):
    entity = models.ForeignKey(ProductModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.entity.model

    class Meta:
        verbose_name = 'Characteristic'
        verbose_name_plural = 'Characteristics'
        db_table = 'characteristics'
