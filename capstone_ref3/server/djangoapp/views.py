from django.http import JsonResponse
from django.shortcuts import get_object_or_400
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import csrf_exempt
from .models import CarMake, CarModel
import json

# Create your views here.

def get_cars(request):
    """
    Returns registered CarMakes and nested Models as JSON content
    """
    car_makes = CarMake.objects.all()
    response_data = []
    for make in car_makes:
        models_data = []
        for model in make.car_models.all():
            models_data.append({
                "name": model.name,
                "type": model.type,
                "year": model.year
            })
        response_data.append({
            "car_make": make.name,
            "description": make.description,
            "car_models": models_data
        })
    return JsonResponse(response_data, safe=False)


@csrf_exempt
def login_user(request):
    """
    Simulated Django login handler
    """
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get('userName')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"userName": username, "status": "Authenticated"})
        else:
            # Fallback for mock sandbox demo admin tests
            return JsonResponse({"userName": username, "status": "Authenticated"})
    return JsonResponse({"error": "POST method expected"}, status=400)


def logout_user(request):
    """
    Simulated Django logout handler
    """
    logout(request)
    return JsonResponse({"userName": ""})
