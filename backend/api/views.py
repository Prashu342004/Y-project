from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from .models import Player, Match, Attendance, User



@api_view(['GET', 'POST'])
def home(request):


    if request.method == 'GET':
        print('this is get method on /')
        players = list(Player.objects.values('photo', 'name', 'position', 'jersey_no',))
        m = Match.objects.first()
        upcoming = {'club_name': m.club_name if m else '', 'time_date': m.time_date.isoformat() if m else None, 'location': m.location if m else ''}
        return Response({'players_detail': players, 'upcoming_matches': upcoming})


@api_view(['GET'])
def profile(request):
    p = Player.objects.first()
    if not p:
        return Response({'error': 'No player'}, status=404)
    try:
        a = p.attendance
    except Attendance.DoesNotExist:
        a = None
    return Response({
        'players_detail': {'photo': p.photo, 'name': p.name, 'position': p.position, 'jersey_no': p.jersey_no},
        'attendence_data': {'percentage': float(a.percentage) if a else 0, 'date_of_present': a.date_present if a else [], 'date_of_absent': a.date_absent if a else [], 'fee_status': a.fee_status if a else ''},
        'contact_info': {'mobile_no': p.mobile_no, 'email': p.email}
    })


@api_view(['POST']) #check email and password are in DB
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        player = User.objects.get(email=email)
        if check_password(password, player.password):
            return Response({'success': True}, status=200)
        else:
            return Response({'error': 'Invalid email or password'}, status=401)
    except User.DoesNotExist:
        return Response({'error': 'Invalid email or password'}, status=401)