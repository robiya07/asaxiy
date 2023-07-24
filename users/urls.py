from django.urls import path

from users.views import about_view

app_name = 'users'

urlpatterns = [
    path('page/about/', about_view, name='about')
]
