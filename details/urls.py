from django.urls import path

from details.views import home_view, main_category_detail_view, second_category_detail_view, third_category_detail_view

app_name = 'details'

urlpatterns = [
    path('', home_view, name='home'),
    path('category/<slug:slug>/', main_category_detail_view, name='main_c'),
    path('category/<slug:slug>/<slug:slug2>/', second_category_detail_view, name='second_c'),
    path('category/<slug:slug>/<slug:slug2>/<slug:slug3>/', third_category_detail_view, name='third_c')
]
