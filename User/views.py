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

            return reverse('admin_dashboard')
        elif self.request.user.roles.role == 'ENTREPRISE':
            return reverse('entreprise_dashboard')
        elif self.request.user.roles.role == 'EMPLOYER':
            return reverse('employer_dashboard')
        elif self.request.user.roles.role == 'CANDIDAT':
            return reverse('candidat_dashboard')
        # elif self.request.user.roles.role == 'GESTIONNAIRE':
        #   return reverse('inscription')


def inscription_user(request):

    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            Utilisateur = form.save(commit=False)
            role = request.POST.get('role')
            Utilisateur.roles = role
            Utilisateur.save()
            return redirect('connexion')  # Redirection vers la page de connexion après inscription réussie
    else:
        form = UserRegistrationForm()
    return render(request, 'inscription.html', {'form': form})


def pageaccueil(request):
    return render(request, 'index.html')


def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')


def entreprise_dashboard(request):
    return render(request, 'entreprise_dashboard.html')


def employer_dashboard(request):
    return render(request, 'employer_dashboard.html')


def candidat_dashboard(request):
    return render(request, 'candidat_dashboard.html')
