from django.urls import path

from big_products.views import product_detail_view

app_name = 'big_products'

urlpatterns = [
    path('product/<slug:product_slug>/', product_detail_view, name='product_detail'),
]
