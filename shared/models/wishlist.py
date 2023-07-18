from django.db import models

from abstracts.models import BaseSharedRelationModel, BaseDateTimeModel


class WishlistModel(BaseSharedRelationModel):
    class Meta:
        verbose_name = 'Wishlist'
        verbose_name_plural = 'Wishlists'
        db_table = 'wishlists'

    def __str__(self):
        return self.user.username


class CartModel(BaseSharedRelationModel, BaseDateTimeModel):
    quantity = models.PositiveSmallIntegerField(default=1)

    class Meta:
        verbose_name = 'Cart'
        verbose_name_plural = 'Carts'
        db_table = 'carts'

    def __str__(self):
        return self.user.username
