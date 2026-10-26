from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class CarMake(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name="Make Name")
    description = models.TextField(blank=True, verbose_name="Description")
    country_of_origin = models.CharField(max_length=100, blank=True, verbose_name="Country of Origin")

    def __str__(self):
        return self.name


class CarModel(models.Model):
    CAR_TYPES = [
        ('SEDAN', 'Sedan'),
        ('SUV', 'SUV'),
        ('WAGON', 'Wagon'),
        ('COUPE', 'Coupe'),
        ('TRUCK', 'Truck'),
        ('VAN', 'Van'),
    ]

    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE, related_name="car_models", verbose_name="Car Make")
    name = models.CharField(max_length=100, verbose_name="Model Name")
    type = models.CharField(max_length=10, choices=CAR_TYPES, default='SEDAN', verbose_name="Vehicle Type")
    year = models.IntegerField(
        validators=[
            MinValueValidator(2015),
            MaxValueValidator(2027)
        ],
        verbose_name="Manufacturing Year"
    )

    def __str__(self):
        return f"{self.car_make.name} {self.name} ({self.year})"
