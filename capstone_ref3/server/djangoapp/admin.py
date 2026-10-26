from django.contrib import admin
from .models import CarMake, CarModel

# Register your models here.

class CarModelInline(admin.TabularInline):
    model = CarModel
    extra = 1
    fields = ['name', 'type', 'year']


class CarMakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'country_of_origin', 'description')
    search_fields = ('name', 'country_of_origin')
    list_filter = ('country_of_origin',)
    inlines = [CarModelInline]


class CarModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'car_make', 'type', 'year')
    list_filter = ('type', 'year', 'car_make')
    search_fields = ('name', 'car_make__name')


admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)
