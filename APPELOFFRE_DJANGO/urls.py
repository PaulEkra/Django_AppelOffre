"""
URL configuration for Appel_offre project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from User.views import pageaccueil, Connect, inscription_user, admin_dashboard, entreprise_dashboard, employer_dashboard,candidat_dashboard

urlpatterns = [
    path('', pageaccueil, name='pageaccueil'),
    path('connexion', Connect.as_view(), name='connexion'),
    path('inscription', inscription_user, name='inscription'),
    path('Admin/',admin_dashboard,name='admin_dashboard'),
    path('Entreprise/', entreprise_dashboard,name='entreprise_dashboard'),
    path('Employer/', employer_dashboard,name='employer_dashboard'),
    path('Candidat/', candidat_dashboard,name='candidat_dashboard'),
    path('admin/', admin.site.urls),
]



