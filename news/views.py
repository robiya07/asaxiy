from django.db.models import Q
from django.shortcuts import render
from hitcount.templatetags.hitcount_tags import get_hit_count
from hitcount.utils import get_hitcount_model
from hitcount.views import HitCountMixin
from news.models import NewsModel


# Create your views here.
def faq_view(request):
    return render(request, 'pages/faq.html')


def delivery_points_view(request):
    return render(request, 'pages/delivery-points.html')


def rules_view(request):
    return render(request, 'pages/rules.html')


def oferta_rassrochka_view(request):
    return render(request, 'pages/oferta-rassrochka.html')


def usloviya_rassrochki_view(request):
    return render(request, 'pages/usloviya-rassrochki.html')


def delivery_view(request):
    return render(request, 'pages/delivery.html')

def news_list_view(request):
    s = request.GET.get('search_key', '')
    news = NewsModel.objects.all()
    if s:
        news = NewsModel.objects.filter(name__icontains=s)
    context = {
        'news': news,
        's': s,
    }
    return render(request, 'news/news.html', context)


def news_detail_view(request, slug):
    news = NewsModel.objects.get(slug=slug)
    hit_count = get_hitcount_model().objects.get_for_object(news)
    hit_count_response = HitCountMixin.hit_count(request, hit_count)
    context = {
        'news': news,
        'hit_count_obj': hit_count_response
    }
    return render(request, 'news/news_detail.html', context)
