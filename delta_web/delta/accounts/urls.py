from django.urls import path, include
from .api import RegisterAPI,LoginAPI,UserAPI,DeleteAPI,UpdateAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth',include('knox.urls')),
    path('api/auth/register',RegisterAPI.as_view()),
    path('api/auth/login',LoginAPI.as_view()),
    path('api/auth/update',UpdateAPI.as_view()),

    path('api/auth/user',UserAPI.as_view()),

    # delete user
    path('api/auth/delete',DeleteAPI.as_view()),
    # invalidates the token, so they need to log back in to grab the token
    # this destroys the token created at log in
    path('api/auth/logout',knox_views.LogoutView.as_view(),name='knox_logout'),
]