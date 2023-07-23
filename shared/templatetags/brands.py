from django import template
from shared.models.product import BrandModel

register = template.Library()


@register.simple_tag
def get_brands():
    return BrandModel.objects.all()
