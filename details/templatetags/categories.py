from django import template

from details.models import CategoryModel

register = template.Library()


@register.simple_tag
def get_main_categories():
    return CategoryModel.objects.filter(parent__isnull=True)


@register.filter
def get_second_categories(categ):
    return CategoryModel.objects.filter(parent_id=categ.id)


@register.filter
def get_child_categories(categ):
    return categ.get_descendants(include_self=False)
