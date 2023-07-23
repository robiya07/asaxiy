# your_app/management/commands/create_discounts.py

from django.core.management.base import BaseCommand
from faker import Faker

from big_products.models import BigProductModel
from details.models import DiscountModel

fake = Faker()


class Command(BaseCommand):
    help = 'Create Discounts'

    def handle(self, *args, **kwargs):
        products = BigProductModel.objects.all()

        for product in products[0:39:3]:
            start_date = fake.date_time_this_year(before_now=True, after_now=False)
            end_date = fake.date_time_between(start_date=start_date)
            is_daily = fake.boolean()
            price = fake.random_int(min=10, max=50)

            discount = DiscountModel.objects.create(
                product=product,
                start_date=start_date,
                end_date=end_date,
                is_daily=is_daily,
                price=price
            )

            self.stdout.write(self.style.SUCCESS(f'Discount created for "{product}"'))
