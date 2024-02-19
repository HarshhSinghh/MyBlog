from rest_framework import serializers
from .models import BlogData ,ContactFormEntry

class BlogDataSerializer(serializers.ModelSerializer):
    class  Meta:
        model =  BlogData
        fields = ("id", "title", "image", "category", "author","authorPic" ,"published_date", "reading_time", "content", "tags")


class ContacFormEntrySerializer(serializers.ModelSerializer):
    class  Meta:
        model = ContactFormEntry
        fields = ['name' , 'email' ,'message']


