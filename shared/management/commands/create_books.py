from django.core.management.base import BaseCommand
from faker import Faker

from shared.models.book import PublisherModel, AuthorModel, BookModel

fake = Faker()


class Command(BaseCommand):
    help = 'Create Books'

    def handle(self, *args, **kwargs):
        for _ in range(15):
            first_name = fake.first_name()
            last_name = fake.last_name()

            author = AuthorModel.objects.create(first_name=first_name, last_name=last_name)
            self.stdout.write(self.style.SUCCESS(f'"{author}" -> author created'))

        for _ in range(10):
            name = fake.company()

            publisher = PublisherModel.objects.create(name=name)
            self.stdout.write(self.style.SUCCESS(f'"{publisher}" -> publisher created'))

        publishers = PublisherModel.objects.all()
        authors = AuthorModel.objects.all()

        for _ in range(20):
            isbn = fake.isbn13()
            pages = fake.random_int(min=50, max=500)
            publisher = fake.random_element(publishers)
            cover = fake.random_element([choice[0] for choice in BookModel.COVER.choices])
            author = fake.random_element(authors)

            book = BookModel.objects.create(
                isbn=isbn,
                pages=pages,
                publisher=publisher,
                cover=cover,
                author=author
            )

            self.stdout.write(self.style.SUCCESS(f'"{book}" -> book created'))
