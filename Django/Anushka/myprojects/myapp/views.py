from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Home(request):
    return HttpResponse("Hii My name is Anushka")


def About(request):
    #  first parameter = req
    #  second parameter = html file
    #  third parameter = data
    return render(request,"index.html",{})



