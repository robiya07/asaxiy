from django.contrib import admin

from shared.models.location import PickupLocationModel
from shared.models.order import OrderModel, DeliveryModel
from shared.models.wishlist import CartModel, WishlistModel

# Register your models here.
admin.site.register(OrderModel)
admin.site.register(DeliveryModel)
admin.site.register(CartModel)
admin.site.register(WishlistModel)
admin.site.register(PickupLocationModel)