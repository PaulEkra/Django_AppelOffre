from django.shortcuts import render


def pageaccueil(request):
    return render(request, 'connexion.html')

def pageaccueil2(request):
    return render(request, 'inscription.html')