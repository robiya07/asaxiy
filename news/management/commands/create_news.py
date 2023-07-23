from django.core.management.base import BaseCommand
from faker import Faker

from details.management.commands.create_categories import download_image
from news.models import NewsModel

fake = Faker()


class Command(BaseCommand):
    help = 'Create News'

    def handle(self, *args, **kwargs):
        for _ in range(10):
            name = fake.sentence()
            description = fake.paragraph()
            image = download_image(fake.image_url(width=800, height=600), 'news')

            news = NewsModel.objects.create(
                name=name,
                description=description,
                image=image
            )

            self.stdout.write(self.style.SUCCESS(f'"{news}" -> news created'))
