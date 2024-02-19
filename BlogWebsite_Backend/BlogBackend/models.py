from django.db import models
from django.contrib.auth.models  import User



# userData Model form

class  CustomerUser(models.Model):
    id =  models.IntegerField(primary_key = True,default = 1)
    user =  models.ForeignKey(User ,  on_delete =  models.CASCADE )
    name =  models.CharField(max_length=200)
    last_name = models.CharField(max_length=100)
    email =  models.EmailField()
    dob =  models.DateField(null =  True , blank = True)
    phonenumber =  models.CharField(max_length = 15 , null =  True , blank =  True)
    profile_picture =  models.ImageField(upload_to="profile_pics" ,  null=True ,  blank=True)
    address =  models.TextField()
    locality =  models.CharField(max_length = 100)
    city =  models.CharField(max_length =30)
    zipcode=  models.CharField(max_length =30)
    
    def __str__(self):
        return str(self.id)
    
# Blog Data Model form Will be contained here
class  BlogData(models.Model):   
    # id =  models.IntegerField(primary_key = True)
    title = models.CharField(max_length =250 )
    image = models.CharField(null=True ,  blank=True ,max_length = 150)
    category = models.CharField(max_length =100)    
    author = models.CharField(max_length =50)
    authorPic = models.CharField(max_length =50 )
    published_date = models.CharField(max_length=50)
    reading_time = models.CharField(max_length =20)
    content = models.TextField()
    tags = models.CharField(max_length =250 ,  blank = True ,  null =True)
    
    def __str__(self):
        return str(self.id)
    
    
    
class ContactFormEntry(models.Model):
    name =  models.CharField(max_length = 100)
    email =  models.EmailField()
    message =  models.TextField()
    
    def __str__(self):
        return str(self.name)
    
