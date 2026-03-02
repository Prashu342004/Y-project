from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError

class Player(models.Model):
    photo = models.URLField(blank=True)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    jersey_no = models.IntegerField()
    mobile_no = models.CharField(max_length=15) 
    email = models.EmailField(blank=True)

    def __str__(self):
        return self.name
    
    def clean(self):
        if User.objects.filter(email=self.email).exists():
            raise ValidationError("Email already exists")

class Match(models.Model):
    club_name = models.CharField(max_length=100)
    time_date = models.DateTimeField()
    location = models.CharField(max_length=200)


class Attendance_list(models.Model):
    player = models.ManyToManyField(Player)
    session_date = models.DateField(default=timezone.localdate)

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    player = models.OneToOneField(
        "Player",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    email = models.EmailField(unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email
        