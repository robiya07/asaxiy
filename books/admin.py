from django.contrib import admin
from books.models import BookModel, AuthorModel, PublisherModel

# Register your models here.
admin.site.register(BookModel)
admin.site.register(AuthorModel)
admin.site.register(PublisherModel)