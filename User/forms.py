from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from Model.models import Utilisateur


class ConnexionForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(ConnexionForm, self).__init__(*args, **kwargs)

        self.fields['username'].error_messages = {
            'required': "Veuillez saisir un mail d'utilisateur valide !!"
        }
        self.fields['password'].error_messages = {
            'required': "Veuillez saisir un mot de passe valide !!"
        }
        self.error_messages = {
            "invalid_login":
                "Veuillez saisir les mêmes informations que lors de la création de votre compte. "
                "Vous devez respecter les majuscules ou les minuscules !!",
            "inactive": "Ce compte est inactif veuillez contacter votre administrateur."
        }


class UserRegistrationForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserRegistrationForm, self).__init__(*args, **kwargs)

        self.fields['email'].error_messages = {
            'unique': 'Cet email existe déjà.',
            'required': 'Ce champ est obligatoire.'
        }

    class Meta:
        model = Utilisateur
        fields = ['email', 'nom', 'prenom', 'password1', 'password2']
