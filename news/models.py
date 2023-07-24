from ckeditor.fields import RichTextField
from django.db import models

from abstracts.models import BaseDateTimeModel, BaseSlugModel


# Create your models here.
class NewsModel(BaseDateTimeModel, BaseSlugModel):
    name = models.CharField(max_length=150)
    image = models.ImageField(upload_to='images/news/')
    description = RichTextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'News'
        verbose_name_plural = 'News'
        db_table = 'news'