from django.urls import path

from news.views import faq_view, delivery_points_view, news_list_view, news_detail_view

app_name = 'news'

urlpatterns = [
    path('page/faq/', faq_view, name='faq'),
    path('page/delivery-points/', delivery_points_view, name='delivery_points'),
    path('news/', news_list_view, name='news'),
    path('news/<slug:slug>/', news_detail_view, name='news_detail'),
]