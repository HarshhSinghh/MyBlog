from django.contrib import admin
from .models  import CustomerUser , BlogData ,  ContactFormEntry
# from import_export.admin import ImportExportModelAdmin
# Register your models here.
@admin.register(CustomerUser)

class CustomerUserAdmin(admin.ModelAdmin):
    list_display = ['name', 'last_name' , 'email','dob' ,'phonenumber' ,'address']

@admin.register(BlogData)

class BlogDataAmin(admin.ModelAdmin):
    list_display =['id' ,'author' ,'title','published_date','tags']
    

@admin.register(ContactFormEntry)
class  ContactFormEntryAdmin(admin.ModelAdmin):
    list_display = ['name' , 'email' ,'message']