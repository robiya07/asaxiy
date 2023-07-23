from django.shortcuts import render

from big_products.models import BigProductModel


# Create your views here.


def product_detail_view(request, product_slug):
    product = BigProductModel.objects.get(slug=product_slug)
    context = {
        'product': product
    }
    return render(request, 'products/product_detail.html', context)
