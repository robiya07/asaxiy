from django.urls import path

from shared.views import brand_view

app_name = 'shared'

urlpatterns = [
    path('brand/<slug:slug>', brand_view, name='brand')
]
