from django.core.management.base import BaseCommand

from details.models import CategoryModel
from faker import Faker
import os
import random
import requests

fake = Faker()


class Command(BaseCommand):
    help = 'Create Categories'

    def handle(self, *args, **kwargs):
        for _ in range(15):
            title = fake.word()
            img = download_image(fake.image_url(width=250, height=250), 'category')
            category = CategoryModel.objects.create(name=title, image=img)
            self.stdout.write(self.style.SUCCESS(f'"{category}" -> category created'))

            self.stdout.write(self.style.NOTICE(f'Subclasses of a "{category}":'))
            for _ in range(5):
                title = fake.word()
                img = download_image(fake.image_url(), 'category')
                category_ch = CategoryModel.objects.create(name=title, image=img, parent=category)
                self.stdout.write(self.style.SUCCESS(f'     "{category_ch}" -> category created'))

                self.stdout.write(self.style.NOTICE(f'     Subclasses of a "{category_ch}":'))
                for _ in range(10):
                    title = fake.word()
                    img = download_image(fake.image_url(), 'category')
                    category_ch2 = CategoryModel.objects.create(name=title, image=img, parent=category_ch)
                    self.stdout.write(self.style.SUCCESS(f'         "{category_ch2}" -> category created'))


def download_image(url, place_url):
    place_url = f'images/{place_url}'
    if not os.path.exists(f'media/{place_url}'):
        os.makedirs(f'media/{place_url}')

    with open(f'media/{place_url}/{url.split("/")[-1]}.jpg', 'wb') as handle:
        response = requests.get(url, stream=True)
        if not response.ok:
            pass

        for block in response.iter_content(1024):
            if not block:
                break

            handle.write(block)

    return place_url + '/' + url.split("/")[-1] + '.jpg'
