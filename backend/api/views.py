from django.contrib.auth import authenticate
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import AuthenticationFailed
from .models import Player, Match, User


@api_view(["GET", "POST"])
def home(request):
        players = list(
            Player.objects.values(
                "photo",
                "name",
                "position",
                "jersey_no",
            )
        )
        m = Match.objects.first()
        upcoming = {
            "club_name": m.club_name if m else "",
            "time_date": m.time_date.isoformat() if m else None,
            "location": m.location if m else "",
        }
        return Response({"players_detail": players, "upcoming_matches": upcoming})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    print("request permitted")
    print(request.META.get("HTTP_AUTHORIZATION"))
    return Response({
        "user": str(request.user),
        "authenticated": request.user.is_authenticated
    })
    # p = Player.objects.get(user=request.user)

    # return Response(
    #     { 
    #         "players_detail": {
    #             "photo": p.photo,
    #             "name": p.name,
    #             "position": p.position,
    #             "jersey_no": p.jersey_no,
    #         },
    #         "contact_info": {"mobile_no": p.mobile_no, "email": p.email},
    #     }
    # )


@api_view(["POST"])  # checks email and password are in DB
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    try:
        user = authenticate(email=email, password=password)
        if user is None:
            return Response({"error": "Invalid email or password"}, status=401)
     
        refresh = RefreshToken.for_user(user)
        access = str(refresh.access_token)
        refresh = str(refresh)
          
        return Response({
                "refresh": refresh,
                "access": access,
                "success": True,
            })

    except User.DoesNotExist:
        return Response({"error": "User not exist"}, status=404)


def ping(request):
    return HttpResponse("ping")
    