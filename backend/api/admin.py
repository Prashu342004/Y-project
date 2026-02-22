from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Attendance_list


from .models import Player, Match, User, Attendance_list
admin.site.register(Player, ModelAdmin)
admin.site.register(Match)
admin.site.register(User)   


class Attendance_listAdmin(ModelAdmin):
    list_display = ('session_date', )


admin.site.register(Attendance_list, Attendance_listAdmin)  


  