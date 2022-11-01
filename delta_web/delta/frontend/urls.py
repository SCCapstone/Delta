from django.urls import path
from . import views

# URL Routing
urlpatterns = [
    path('',views.index),
]