from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


app_name = '202102_activity_web'
urlpatterns = [
    path('home/', views.edelweiss_cream, name='202102_activity_web'),
]