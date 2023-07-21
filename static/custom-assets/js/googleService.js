function getProduct(id) {
    $.ajax({
        url: getBaseUrl() + '/ajax/get-product-info',
        data: {id: id},
        async: false,
        success: function (result) {
            window.dataLayer.push(result);
            gtag("event", "view_item", {
                currency: "UZS",
                value: result.ecommerce.items[0].price,
                items: result.ecommerce.items
            });
        }
    });
    return null;
}

function selectProduct(id) {
    $.ajax({
        url: getBaseUrl() + '/ajax/get-product-info',
        data: {id: id},
        async: false,
        success: function (result) {
            gtag("event", "select_item", {
                item_list_id: result.ecommerce.items[0].item_id,
                item_list_name: result.ecommerce.items[0].item_name,
                items: result.ecommerce.items
            });
        }
    });
}

function addCartProduct(id) {
    $.ajax({
        url: getBaseUrl() + '/ajax/update-product-on-cart',
        data: {id: id},
        async: false,
        success: function (result) {
            window.dataLayer.push(result);
            gtag("event", "add_to_cart", {
                currency: "UZS",
                value: result.ecommerce.items[0].price,
                items: result.ecommerce.items
            });
        }
    });
    return null;
}

function removeFromCartProduct(id) {
    $.ajax({
        url: getBaseUrl() + '/ajax/update-product-on-cart',
        data: {id: id},
        async: false,
        success: function (result) {
            result.event = 'remove_from_cart';
            window.dataLayer.push(result);
            gtag("event", "remove_from_cart", {
                currency: "UZS",
                value: result.ecommerce.items[0].price,
                items: result.ecommerce.items
            });
        }
    });
    return null;
}

function addWishProduct(id) {
    $.ajax({
        url: getBaseUrl() + '/ajax/add-wish-product-info',
        data: {id: id},
        async: false,
        success: function (result) {
            window.dataLayer.push(result);
            gtag("event", "add_to_wishlist", result.ecommerce);
        }
    });
    return null;
}

function purchaseCart(id) {
    $.ajax({
        url: getBaseUrl() + '/ajax/purchase-cart',
        data: {id: id},
        async: false,
        success: function (result) {
            window.dataLayer.push(result);
            gtag("event", "purchase", result.ecommerce);
        }
    });
    return null;
}

function getBaseUrl() {
    var lang = document.documentElement.lang, baseUrl = '/' + lang;
    if (lang === 'ru') baseUrl = '';
    return baseUrl;
}
