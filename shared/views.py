from django.shortcuts import render

from big_products.models import BigProductModel
from shared.models.product import BrandModel


def brand_detail_view(request, slug):
    products = BigProductModel.objects.filter(prod__brand__slug=slug)
    context = {
        'products': products
    }
    return render(request, 'products/brand.html', context)


def brand_list_view(request):
    brands = BrandModel.objects.all()
    letter = request.GET.get('letter', '')
    if letter:
        brands = BrandModel.objects.filter(name__istartswith=letter)

    brands_cap = BrandModel.objects.all()
    context = {
        'brands': brands,
        'brands_cap': brands_cap
    }
    return render(request, 'brand_list.html', context)
