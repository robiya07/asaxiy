from django.shortcuts import render

from details.models import DiscountModel


# Create your views here.
def home_view(request):
    discounts = DiscountModel.objects.all()