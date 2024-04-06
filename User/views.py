from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.urls import reverse

from Model.models import Roles
from User.forms import ConnexionForm, UserRegistrationForm


class Connect(LoginView):
    template_name = 'connexion.html'
    form_class = ConnexionForm

    def get_success_url(self) -> str:
        if self.request.user.roles.role == 'ADMIN':

            return reverse('pageaccueil')
        else:
            return reverse('inscription')
        # elif self.request.user.roles.role == 'GESTIONNAIRE':
        #   return reverse('inscription')


def inscription_user(request):
    context = {}
    if request.method == 'POST':
        if 'inscription' in request.POST:
            form = UserRegistrationForm(request.POST)
            if form.is_valid():
                user = form.save(commit=False)
                user.roles = 4
                user.save()
                return redirect('connexion')
            else:

                context['forms'] = form
                return render(request, 'connexion.html', context=context)

    form = UserRegistrationForm()
    context['form'] = form
    return render(request, 'connexion_user.html', context=context)


def pageaccueil(request):
    return render(request, 'index.html')


def pageaccueil2(request):
    return render(request, 'inscription.html')
