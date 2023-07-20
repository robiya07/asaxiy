from ckeditor.fields import RichTextField
from django.db import models
from django.utils.text import slugify


class BaseProductBookRelationModel(models.Model):
    product = models.ForeignKey('products.ProductModel', on_delete=models.CASCADE, null=True, blank=True)
    book = models.ForeignKey('books.BookModel', on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        abstract = True

    def __str__(self):
        if self.product:
            return self.product.name
        return self.book.name


class BaseSharedRelationModel(BaseProductBookRelationModel):
    user = models.OneToOneField('users.UserModel', on_delete=models.CASCADE)

    class Meta:
        abstract = True


class BaseDateTimeModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class BaseSlugModel(models.Model):
    slug = models.SlugField(max_length=130, unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

            while self.__class__.objects.filter(slug=self.slug).exists():
                slug = self.__class__.objects.filter(slug=self.slug).first().slug
                if '-' in slug:
                    try:
                        if slug.split('-')[-1] in self.name:
                            self.slug += '-1'
                        else:
                            self.slug = '-'.join(slug.split('-')[:-1]) + '-' + str(int(slug.split('-')[-1]) + 1)
                    except:
                        self.slug = slug + '-1'
                else:
                    self.slug += '-1'

            super().save(*args, **kwargs)

    class Meta:
        abstract = True


class BaseBookProductModel(BaseSlugModel, BaseDateTimeModel):
    model = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    main_image = models.ImageField(upload_to='images/product_detail')
    category = models.ForeignKey('details.CategoryModel', on_delete=models.CASCADE)
    description = RichTextField(blank=True)
    like = models.PositiveIntegerField(default=0)
    availability = models.BooleanField(default=True)
    installment = models.BooleanField(default=False)

    def __str__(self):
        return self.model

    class Meta:
        abstract = True
