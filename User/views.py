from django.contrib.auth.views import LoginView
from django.shortcuts import render
from django.urls import reverse

#from User.forms import ConnexionForm


class Connect (LoginView):
    template_name = 'connexion.html'
 #   form_class = ConnexionForm

    pass


def pageaccueil(request):
    return render(request, 'index.html')


def pageaccueil2(request):
    return render(request, 'inscription.html')
