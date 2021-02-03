from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
import json
import types
from datetime import datetime


def edelweiss_cream(request):

    return render(
        request,
        'myweb/home.html',
        {},
    )

