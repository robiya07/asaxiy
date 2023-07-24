from django.core.management.base import BaseCommand
from users.models import ManagersModel
from faker import Faker

from details.management.commands.create_categories import download_image

fake = Faker()


class Command(BaseCommand):
    help = 'Create Managers'

    def handle(self, *args, **kwargs):
        for _ in range(10):
            first_name = fake.first_name()
            last_name = fake.last_name()
            job = fake.job()
            image = download_image(fake.image_url(width=200, height=200), 'managers')
            url = fake.url()

            manager = ManagersModel.objects.create(
                first_name=first_name,
                last_name=last_name,
                job=job,
                image=image,
                url=url
            )

            self.stdout.write(self.style.SUCCESS(f'Manager "{first_name} {last_name}" created'))
