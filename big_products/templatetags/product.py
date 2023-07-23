from django import template

from details.models import CategoryModel

register = template.Library()


@register.filter
def format_price(price):
    return '{:,}'.format(price).replace(',', ' ')
