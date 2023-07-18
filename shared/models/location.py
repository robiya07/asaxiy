from django.db import models
from location_field.models.plain import PlainLocationField


class PickupLocationModel(models.Model):
    name = models.CharField(max_length=100)
    location = PlainLocationField(based_fields=['city'], zoom=7)
    target = models.CharField(max_length=255)
    start_time = models.TimeField()
    end_time = models.TimeField()
    weekend = models.CharField(max_length=10)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Pickup Location'
        verbose_name_plural = 'Pickup Locations'
        db_table = 'pickup_locations'
