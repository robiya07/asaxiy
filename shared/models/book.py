from django.db import models


# Create your models here.
class PublisherModel(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Publisher'
        verbose_name_plural = 'Publishers'
        db_table = 'publishers'


class AuthorModel(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    class Meta:
        verbose_name = 'Author'
        verbose_name_plural = 'Authors'
        db_table = 'authors'


class BookModel(models.Model):
    class COVER(models.TextChoices):
        SOFT = "soft", "Мягкая"
        HARD = "hard", "Твёрдая"
        SOFTWITHSLIPCASE = "softwithslipcase", "Мягкая + Футляр"

    isbn = models.CharField(max_length=50, unique=True)
    pages = models.PositiveSmallIntegerField(default=1, blank=True)
    publisher = models.ForeignKey(PublisherModel, on_delete=models.CASCADE)
    cover = models.CharField(max_length=20, choices=COVER.choices, default=COVER.SOFT)
    author = models.ForeignKey(AuthorModel, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'
        db_table = 'books'
