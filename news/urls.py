from django.urls import path

from news.views import faq_view

app_name = 'news'

urlpatterns = [
    path('pages/faq/', faq_view, name='faq'),
]