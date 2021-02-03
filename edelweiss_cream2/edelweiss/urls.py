from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


app_name = 'edelweiss_cream'
urlpatterns = [
    path('home/', views.edelweiss_cream, name='edelweiss_cream'),
]