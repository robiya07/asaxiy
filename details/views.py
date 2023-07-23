from django.db.models import Q
from django.shortcuts import render
from datetime import timedelta, datetime
from details.models import DiscountModel, CategoryModel
from big_products.models import BigProductModel


# Create your views here.
def home_view(request):
    last_24_hours = datetime.now() - timedelta(hours=24)

    discounts = DiscountModel.objects.all()
    conditioners = BigProductModel.objects.filter(category__slug='konditsioneri')
    comp = BigProductModel.objects.filter(category__slug='kompyuternaya-texnika')
    novelties = BigProductModel.objects.filter(created_at__gte=last_24_hours)
    context = {
        'discounts': discounts,
        'conditioners': conditioners,
        'comps': comp,
        'novelties': novelties
    }
    return render(request, 'index.html', context)


def main_category_detail_view(request, slug):
    category = CategoryModel.objects.get(slug=slug)
    descendants = category.get_descendants(include_self=True)
    products = BigProductModel.objects.filter(category__in=descendants)
    context = {
        'products': products
    }
    return render(request, 'products/category.html', context)


def second_category_detail_view(request, slug, slug2):
    category = CategoryModel.objects.get(Q(slug=slug2) & Q(parent__slug=slug))
    descendants = category.get_descendants(include_self=True)
    products = BigProductModel.objects.filter(category__in=descendants)
    context = {
        'products': products
    }
    return render(request, 'products/category.html', context)


def third_category_detail_view(request, slug, slug2, slug3):
    products = BigProductModel.objects.filter(category__slug=slug3)
    context = {
        'products': products
    }
    return render(request, 'products/category.html', context)
