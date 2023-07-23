from django.contrib import admin
from mptt.admin import DraggableMPTTAdmin

from details.forms import DiscountModelForm
from details.models import CategoryModel, ImageModel, DiscountModel, ReviewModel, CharacteristicsModel

# Register your models here.
admin.site.register(
    CategoryModel,
    DraggableMPTTAdmin,
    list_display=(
        'tree_actions',
        'indented_title',
    ),
    list_display_links=(
        'indented_title',
    ),
)


@admin.register(DiscountModel)
class MyModelAdmin(admin.ModelAdmin):
    form = DiscountModelForm


admin.site.register(ImageModel)
admin.site.register(ReviewModel)
admin.site.register(CharacteristicsModel)
