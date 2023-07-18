from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class UserModel(AbstractUser):
    class GENDER(models.TextChoices):
        MALE = "male", "Мужской"
        FEMALE = "female", "Женский"

    phone = models.CharField(max_length=20, unique=True)
    image = models.ImageField(upload_to='images/users/', null=True, blank=True)
    full_name = models.CharField(max_length=150, null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    job = models.CharField(max_length=100, null=True, blank=True)
    job_address = models.CharField(max_length=255, null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True, choices=GENDER.choices, default=GENDER.MALE)
    passport_series = models.PositiveSmallIntegerField(null=True, blank=True)
    balance = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return self.phone

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        db_table = 'users'