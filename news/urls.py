from django.urls import path

from news.views import faq_view, delivery_points_view, news_list_view, news_detail_view, rules_view, \
    oferta_rassrochka_view, usloviya_rassrochki_view, delivery_view

app_name = 'news'

urlpatterns = [
    path('page/faq/', faq_view, name='faq'),
    path('page/delivery-points/', delivery_points_view, name='delivery_points'),
    path('page/rules/', rules_view, name='rules'),
    path('page/oferta-rassrochka/', oferta_rassrochka_view, name='oferta_rass'),
    path('page/usloviya-rassrochki/', usloviya_rassrochki_view, name='usloviya_rass'),
    path('page/delivery/', delivery_view, name='delivery'),
    path('news/', news_list_view, name='news'),
    path('news/<slug:slug>/', news_detail_view, name='news_detail'),
]