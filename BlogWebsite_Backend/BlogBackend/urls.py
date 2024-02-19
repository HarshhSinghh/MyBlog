from django.urls import path
from .views import BlogList, BlogDetail , ContactFormView

urlpatterns = [
    path("StudentList/", BlogList.as_view(), name="StudentList"),
    path("StudentList/<int:pk>/", BlogDetail.as_view(), name="StudentDetail"),
    path("contact/", ContactFormView.as_view(), name='contact_form'),

    
]


    # path('blogs/<int:id>/', SingleBlogView.as_view(), name='single_blog'),
