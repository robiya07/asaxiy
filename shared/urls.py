from django.urls import path

from shared.views import brand_detail_view, brand_list_view

app_name = 'shared'

urlpatterns = [
    path('brand/<slug:slug>', brand_detail_view, name='brand'),
    path('brands/', brand_list_view, name='brands')
]
