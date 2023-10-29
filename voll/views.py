from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from .models import *
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

# Create your views here.


@login_required(login_url="login")
def index(request):
    return render(
        request, "voll/index.html", {"greeting": request.user.username.capitalize()}
    )


def login_user(request):
    # if the username and password exists...
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))

        else:
            return render(
                request,
                "voll/login.html",
                {"message": "Incorrect Username or Password"},
            )
    else:
        return render(request, "voll/login.html")


def logout_user(request):
    logout(request)
    return HttpResponseRedirect(reverse("login"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        password2 = request.POST["password2"]
        if password != password2:
            return render(
                request, "voll/register.html", {"message": "Password does not match"}
            )
        else:
            user = User.objects.create_user(
                username=username, email=email, password=password
            )
            user.save()

        return HttpResponseRedirect(reverse("login"))
    else:
        return render(request, "voll/register.html")


def feedback(request):
    if request.method == "GET":
        return render(request, "voll/feedback.html")

    else:
        text = request.POST["text"]
        Feedback.objects.create(user=request.user, text=text)
        return render(
            request,
            "voll/feedback.html",
            {
                "message": "Thanks for your Feedback! We work very hard in our development process and are trying to deliver the best service possible!!"
            },
        )
