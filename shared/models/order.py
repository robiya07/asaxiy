from django.db import models

from abstracts.models import BaseDateTimeModel
from books.models import BookModel
from products.models import ProductModel
from users.models import UserModel


class OrderModel(BaseDateTimeModel):
    class STATUS(models.TextChoices):
        WAIT = "wait", "Ожидание"
        CANCEL = "cancel", "Отменено"
        SUCCESS = "success", "Успешно"

    summary = models.PositiveIntegerField()
    status = models.CharField(max_length=10, null=True, blank=True, choices=STATUS.choices, default=STATUS.WAIT)
    address = models.CharField(max_length=255)
    index_p = models.PositiveIntegerField(null=True, blank=True)
    product = models.OneToOneField(ProductModel, on_delete=models.CASCADE, null=True, blank=True)
    paid = models.PositiveIntegerField(null=True, blank=True)
    rem_sum = models.PositiveIntegerField(null=True, blank=True)
    book = models.OneToOneField(BookModel, on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'
        db_table = 'orders'


class DeliveryModel(models.Model):
    method = models.CharField(max_length=100, null=True, blank=True)
    time = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    cost = models.PositiveIntegerField(null=True, blank=True)
    order = models.OneToOneField(OrderModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.order.user.username

    class Meta:
        verbose_name = 'Delivery'
        verbose_name_plural = 'Deliveries'
        db_table = 'deliveries'
