from django.contrib.auth.hashers import make_password
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Player, User
from decouple import config
import requests
import sys



@receiver(post_save, sender=Player)
def create_user(sender,instance, created, **kwargs):

    # Prevent execution during migrations
    if 'migrate' in sys.argv:
        return

    generated_password = str(instance.jersey_no) + "_"+ instance.email + "_"+ instance.mobile_no

    print(generated_password)
    print(type(generated_password))
    if created:
        try:
            User.objects.create(
                player = instance,
                email = instance.email,
                password = make_password(generated_password)
            )
            print('user created successfully')
            url = "https://api.brevo.com/v3/smtp/email"

            payload = {
                "htmlContent": "<html><head></head><body>Your Password for ERP is {{params.password}}</p></body></html>",
                "params": {
                    "password": generated_password,
                },
                "sender": {
                    "email": config('BREVO_SENDER_EMAIL'),
                    "name": "Gautam from YBFC"
                },
                "subject": "ERP password from YBFC",
                "to": [
                    {
                        "email": instance.email,
                        "name": instance.name
                    } 
                ]
            }
            headers = {
                "api-key": config('BREVO_API_KEY'),
                "Content-Type": "application/json"
            }

            response = requests.post(url, json=payload, headers=headers)

            print(response.json())
        except Exception as e:
            print(e)