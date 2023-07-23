# details/management/commands/create_products.py

from django.core.management.base import BaseCommand
from faker import Faker
import os
import requests

from details.management.commands.create_categories import download_image
from details.models import CategoryModel
from shared.models.product import BrandModel, ProductModel

fake = Faker()


class Command(BaseCommand):
    help = 'Create Products'

    def handle(self, *args, **kwargs):

        for _ in range(10):
            name = fake.company()
            logo = download_image(fake.image_url(width=100, height=100), 'brand')

            brand = BrandModel.objects.create(name=name, logo=logo)
            self.stdout.write(self.style.SUCCESS(f'"{brand}" -> brand created'))

        brands = BrandModel.objects.all()
        for _ in range(50):
            brand = fake.random_element(brands)

            product = ProductModel.objects.create(
                brand=brand
            )

            self.stdout.write(self.style.SUCCESS(f'"{product}" -> product created'))
