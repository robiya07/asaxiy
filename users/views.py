from django.shortcuts import render

from users.models import ManagersModel


# Create your views here.
def about_view(request):
    managers = ManagersModel.objects.all()
    context = {
        'managers': managers
    }
    return render(request, 'pages/about.html', context)
