"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    # connect route and view; make sure always keep a tail slash
    path('api/user/register/', CreateUserView.as_view(), name='register'),
    # view to get a new access token
    path('api/token/', TokenObtainPairView.as_view(), name='get_token'),
    # view to get a new refresh token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    # include all the urls for the rest_framework
    path('api-auth/', include('rest_framework.urls')),
    # include all the urls for the api app
    path('api/', include('api.urls')),
]
