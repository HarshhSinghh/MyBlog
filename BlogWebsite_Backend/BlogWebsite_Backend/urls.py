from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blogend/', include('BlogBackend.urls') ),
    path('/', include('BlogBackend.urls') ),
    # Your other URL patterns go here
]
