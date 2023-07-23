# your_app/management/commands/create_images.py

from django.core.management.base import BaseCommand
from faker import Faker
import os
import requests

from big_products.models import BigProductModel
from details.management.commands.create_categories import download_image
from details.models import ImageModel

fake = Faker()


class Command(BaseCommand):
    help = 'Create Images'

    def handle(self, *args, **kwargs):
        big_products = BigProductModel.objects.all()

        for _ in range(30):
            product = fake.random_element(big_products)
            image = download_image(fake.image_url(width=800, height=600), 'products_list')

            img = ImageModel.objects.create(
                product=product,
                image=image
            )

            self.stdout.write(self.style.SUCCESS(f'"{img}" -> image created'))
