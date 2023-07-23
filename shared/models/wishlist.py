from django.db import models

from abstracts.models import BaseDateTimeModel
from big_products.models import BigProductModel
from users.models import UserModel


class WishlistModel(models.Model):
    product = models.ForeignKey(BigProductModel, on_delete=models.CASCADE)
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Wishlist'
        verbose_name_plural = 'Wishlists'
        db_table = 'wishlists'

    def __str__(self):
        return self.user.username


class CartModel(BaseDateTimeModel):
    product = models.ForeignKey(BigProductModel, on_delete=models.CASCADE)
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=1)

    class Meta:
        verbose_name = 'Cart'
        verbose_name_plural = 'Carts'
        db_table = 'carts'

    def __str__(self):
        return self.user.username
