from django.contrib import admin

from shared.models.location import PickupLocationModel
from shared.models.order import OrderModel, DeliveryModel
from shared.models.wishlist import CartModel, WishlistModel
from shared.models.book import PublisherModel, BookModel, AuthorModel
from shared.models.product import BrandModel, ProductModel

# Register your models here.
admin.site.register(OrderModel)
admin.site.register(DeliveryModel)
admin.site.register(CartModel)
admin.site.register(WishlistModel)
admin.site.register(PickupLocationModel)
admin.site.register(PublisherModel)
admin.site.register(BookModel)
admin.site.register(AuthorModel)
admin.site.register(BrandModel)
admin.site.register(ProductModel)
