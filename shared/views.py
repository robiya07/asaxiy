from django.shortcuts import render

from shared.models.product import BrandModel


def brand_view(request, slug):
    brand = BrandModel.objects.get(slug=slug)
    context = {
        'brand': brand
    }
    return render(request, 'products/brand.html', context)
