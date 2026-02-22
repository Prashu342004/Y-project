from django.db import models
from django.utils import timezone

class Player(models.Model):
    photo = models.URLField(blank=True)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    jersey_no = models.IntegerField()
    mobile_no = models.CharField(max_length=15) 
    email = models.EmailField(blank=True)
    def __str__(self):
        return self.name

class Match(models.Model):
    club_name = models.CharField(max_length=100)
    time_date = models.DateTimeField()
    location = models.CharField(max_length=200)


class Attendance_list(models.Model):
    player = models.ManyToManyField(Player)
    session_date = models.DateField(default=timezone.localdate)

class User(models.Model):
    player = models.OneToOneField(Player, on_delete=models.CASCADE ,null=True, blank=True)
    email = models.EmailField(blank=True)
    password = models.CharField(max_length=100)

    @property
    def is_authenticated(self):
        return True 

    @property
    def is_active(self):
        return True 
    def __str__(self):
        return self.email