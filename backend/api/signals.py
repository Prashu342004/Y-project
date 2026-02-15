from django.contrib.auth.hashers import make_password
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Player, User
import sys

@receiver(post_save, sender=Player)
def create_user(sender,instance, created, **kwargs):

    # Prevent execution during migrations
    if 'migrate' in sys.argv:
        return

    generated_password = 'this is test password for checking connectivity'
    if created:
        try:
            User.objects.create(
                player = instance,
                email = instance.email,
                password = generated_password
            )
            print('user created successfully')
        except Exception as e:
            print(e)