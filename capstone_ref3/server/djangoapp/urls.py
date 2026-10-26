from django.urls import path
from . import views

app_name = 'djangoapp'
urlpatterns = [
    path('get_cars', views.get_cars, name='get_cars'),
    path('login', views.login_user, name='login'),
    path('logout', views.logout_user, name='logout'),
]
