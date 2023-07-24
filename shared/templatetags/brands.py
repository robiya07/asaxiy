from django import template
from shared.models.product import BrandModel

register = template.Library()


@register.simple_tag
def get_brands():
    return BrandModel.objects.all()


@register.filter
def unique_brands(brands):
    res = []
    for i in brands:
        if i.name[0] not in [r.name[0] for r in res]:
            res += [i]
    return res