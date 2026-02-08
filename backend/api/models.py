from django.db import models

class Player(models.Model):
    photo = models.URLField(blank=True)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    jersey_no = models.IntegerField()
    mobile_no = models.CharField(max_length=20, blank=True) # integer field
    email = models.EmailField(blank=True)
    def __str__(self):
        return self.name

class Match(models.Model):
    club_name = models.CharField(max_length=100)
    time_date = models.DateTimeField()
    location = models.CharField(max_length=200)

class Attendance(models.Model):
    player = models.OneToOneField(Player, on_delete=models.CASCADE)
    percentage = models.DecimalField(max_digits=5, decimal_places=2)
    date_present = models.JSONField(default=list)
    date_absent = models.JSONField(default=list)
    fee_status = models.BooleanField(default=True) # could be boolean
    def __str__(self):
        return self.player.name + " attendance"
