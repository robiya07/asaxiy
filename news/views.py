from django.shortcuts import render


# Create your views here.
def faq_view(request):
    return render(request, 'pages/faq.html')
