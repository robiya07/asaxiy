from django.contrib import admin

from big_products.forms import BigProductModelForm
from big_products.models import BigProductModel


# Register your models here.

@admin.register(BigProductModel)
class MyModelAdmin(admin.ModelAdmin):
    form = BigProductModelForm
