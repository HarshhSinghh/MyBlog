from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import BlogData
from .serializers import BlogDataSerializer , ContacFormEntrySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework  import  status
from .models import ContactFormEntry
from rest_framework.views import APIView
from django.utils.decorators import method_decorator



class BlogList(ListAPIView):
    queryset = BlogData.objects.all()
    serializer_class = BlogDataSerializer

class BlogDetail(RetrieveAPIView):
    queryset = BlogData.objects.all()
    serializer_class = BlogDataSerializer

# @method_decorator(csrf_exempt, name='dispatch')

class ContactFormView(APIView):
    def post(self,request ,  *args, **kwargs):
        serializer =  ContacFormEntrySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return  Response(serializer.data ,  status=  status.HTTP_201_CREATED)
        return  Response(serializer.errors ,  status=  status.HTTP_400_BAD_REQUEST)
    
    
        
        