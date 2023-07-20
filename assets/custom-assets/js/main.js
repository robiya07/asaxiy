// LAZYLOAD IMAGES
$("img.lazyload").lazyload();

// Go to Top
$(window).on('scroll', function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});

function getBaseAjaxUrl() {
    var currentLanguage = document.documentElement.lang, baseAjaxUrl = '/' + currentLanguage;
    if (currentLanguage === 'ru') baseAjaxUrl = '';
    return baseAjaxUrl;
}

$(document).ready(function () {
    // select
    $('select.nc__select').niceSelect();
    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

// Click Event
$('.go-top').on('click', function () {
    $("html, body").animate({scrollTop: "0"}, 500);
});

// swiper
if ($('.hero__big-slider').length) {
    var swiperHero = new Swiper(".hero__big-slider", {
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        preloadImages: false,
        lazy: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true
        }
    });
}
if ($('.product__item-img').length) {
    var productImageSlider = new Swiper('.product__item-img', {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
    })

    var cards = document.querySelectorAll('.product__item');
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('mouseenter', function (event) {
            var swiper = event.currentTarget.querySelector('.swiper-container').swiper;
            swiper.params.autoplay.delay = 500;
            swiper.autoplay.start()
        });
        cards[i].addEventListener('mouseleave', function (event) {
            var swiper = event.currentTarget.querySelector('.swiper-container').swiper;
            swiper.autoplay.stop()
        });
    }
}


// $('.clients__slider').slick({
//     infinite: true,
//     slidesToScroll: 3,
//     slidesToShow: 3,
//     // autoplay: true,
//     pauseOnHover: true,
//     autoplaySpeed: 2500,
//     arrows: false,
//     responsive: [{
//         breakpoint: 1025,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//     }, {
//         breakpoint: 768,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }]
// });
//
//
if ($('.partners__list').length) {
    var swiperPartners = new Swiper(".partners__list", {
        slidesPerView: 8,
        spaceBetween: 2,
        mousewheel: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            481: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 8,
            },
        },
    });
}

if ($('.managers__slider').length) {
    var managersSlider = new Swiper('.managers__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })
}

if ($('.hd-slider').length) {
    var swiperHd = new Swiper(".hd-slider", {
        slidesPerView: 1,
        loop: true,
        mousewheel: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
}
if ($('.hd-even-slider').length) {
    var swiperHdEven = new Swiper(".hd-even-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        mousewheel: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
        }
    })
}
// sidebar
let sidebar = $('.sidebar');
let sidebarOverlay = $('.sidebar__overlay');
let hamburger = $('.hamburger');

$(document).on('click', '.btn-toggle', function (e) {
    e.preventDefault();
    hamburger.toggleClass('active');
    sidebar.toggleClass('active');
    sidebarOverlay.toggleClass('active');
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        hamburger.removeClass('active');
        sidebar.removeClass('active');
        sidebarOverlay.removeClass('active');
    }
});

sidebarOverlay.on('click', function (evt) {
    if (evt.target.matches('.sidebar__overlay')) {
        hamburger.removeClass('active');
        sidebar.removeClass('active');
        sidebarOverlay.removeClass('active');
    }
});

let hamburgerSmall = $('.hamburger-small');
let megaMenu = $('.mega__menu');

function openMenu() {
    $('body').addClass('overflow-hidden')
    hamburgerSmall.addClass('active');
}

function closeMenu() {
    $('body').removeClass('overflow-hidden')
    hamburgerSmall.removeClass('active');
}

function toggleMenu() {
    megaMenu.toggleClass('active');
    if (megaMenu.hasClass('active')) {
        openMenu();
    } else {
        closeMenu();
    }
}

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        closeMenu();
        megaMenu.removeClass('active');
    }
});

let megaMenuSmall = $('.mega__menu-small');
let filtersContent = $('.filters__content');

function openSmallMenu() {
    megaMenuSmall.addClass('active');
}

function closeSmallMenu() {
    megaMenuSmall.removeClass('active');
}

$('.close-nav').on('click', function () {
    hamburger.removeClass('active');
    sidebar.removeClass('active');
    sidebarOverlay.removeClass('active');
})

function openSmallFilter() {
    filtersContent.addClass('active');
    $('body').css('overflow', 'hidden');
}

function closeSmallFilter() {
    filtersContent.removeClass('active');
    $('body').css('overflow-y', 'auto');
}

// amount counter
function up(id) {
    addCartProduct(id);
    let amountNumber = $('.amount-number-' + id);
    amountNumber.val(1 + parseInt(amountNumber.val()));
    if (id !== 'view') {
        $.post(getBaseAjaxUrl() + '/cart/quantity?id=' + id, {quantity: amountNumber.val()});
    }
}

function down(min, id) {
    removeFromCartProduct(id);
    min = 1;
    let amountNumber = $('.amount-number-' + id);
    amountNumber.val(parseInt(amountNumber.val()) - 1);
    if (amountNumber.val() <= parseInt(min)) {
        amountNumber.val(min);
    }
    if (id !== 'view') {
        $.post(getBaseAjaxUrl() + '/cart/quantity?id=' + id, {quantity: amountNumber.val()});
    }
}

function removeFromCart(id, cart = false) {
    removeFromCartProduct(id);
    $.ajax({
        type: "POST",
        url: getBaseAjaxUrl() + '/cart/remove?id=' + id,
        data: {id: id},
        success: function (result) {
            $('#cart-count').text(result);
            $("#cart-content").load(location.href + " #cart-content");
            if (cart) {
                $.pjax.reload({container: "#cart-index"});
            } else {
                $.pjax.reload({container: "#cart"});
            }
        }
    })
}

function g_view_item(id) {
    getProduct(id);
}

function g_add_cart(id) {
    addCartProduct(id);
}

function addToCart(id, tag_id, cart = false) {
    let num = $('#amount-number-' + tag_id).val();
    $.ajax({
        type: "POST",
        url: getBaseAjaxUrl() + '/cart/add?id=' + id,
        data: {id: id, quantity: num},
        success: function (result) {
            $('#cart-count').text(result);
            $("#cart-content").load(location.href + " #cart-content");
            if (cart) {
                $.pjax.reload({container: "#cart-index"});
            } else {
                $.pjax.reload({container: "#cart"});
            }
        }
    });
}

function addToCartInView(element, id, tag_id, cart = false) {
    let num = $('#amount-number-' + tag_id).val();
    var language = document.documentElement.lang;
    if ($(window).width() > 992) {
        let addButton = $(element);
        let productImg = addButton.find('img');
        let position = productImg.offset();
        var rt = ($(window).width() - (productImg.offset().left + productImg.outerWidth()));
        let cartPosition = $('.header__top__link--cart');
        let cr = ($(window).width() - (cartPosition.offset().left + cartPosition.outerWidth() - 20));

        $.ajax({
            type: "POST",
            url: getBaseAjaxUrl() + '/cart/add?id=' + id,
            data: {id: id, quantity: num},
            success: function (result) {
                $('body').append('<div class="floating-cart"></div>');
                var aCart = $('div.floating-cart');
                productImg.clone().appendTo(aCart);
                $(aCart).css({
                    'filter': 'invert(57%) sepia(92%) saturate(5252%) hue-rotate(189deg) brightness(101%) contrast(106%)',
                    'width': '30px',
                    'height': '30px',
                    'top': position.top + 'px',
                    "right": rt + 'px'
                }).fadeIn("slow").addClass('moveToCart');

                $(aCart).css({
                    'top': cartPosition.offset().top + 'px',
                    "right": cr + 'px'
                })


                setTimeout(function () {
                    $("body").addClass("MakeFloatingCart");
                }, 1000);

                setTimeout(function () {
                    $('div.floating-cart').remove();
                    $("body").removeClass("MakeFloatingCart");
                }, 1000);

                $('#cart-count').text(result);
                $("#cart-content").load(location.href + " #cart-content");

                if (cart) {
                    $.pjax.reload({container: "#cart-index"});
                } else {
                    $.pjax.reload({container: "#cart"});
                }
            }
        });
    } else {
        let messages = {
            ru: {
                title: 'Товар добавлен в корзину',
                message: 'Нажмите, что бы оформить заказ'
            },
            uz: {
                title: 'Mahsulot savatchaga qoʻshildi',
                message: 'Savatchaga oʻtish uchun oynani bosing'
            },
            oz: {
                title: 'Маҳсулот саватчага қўшилди',
                message: 'Саватчага ўтиш учун ойнани босинг'
            }
        };


        $.ajax({
            type: "POST",
            url: getBaseAjaxUrl() + '/cart/add?id=' + id,
            data: {id: id, quantity: num},
            success: function (result) {
                $('#cart-count').text(result);

                if (cart) {
                    $.pjax.reload({container: "#cart-index"});
                } else {
                    showNotify('/cart/checkout', messages[language].title, messages[language].message);
                    $.pjax.reload({container: "#cart"});
                }
            }
        });
    }
}

function addToCartAnim(element, id, tag_id, cart = false) {
    // g_add_cart(id);
    let num = $('#amount-number-' + tag_id).val();
    var lang = document.documentElement.lang;
    if ($(window).width() > 992) {
        let productCard = $(element).parent();
        let position = productCard.offset();
        let productImg = productCard.find('.swiper-slide-active > img');
        var rt = ($(window).width() - (productCard.offset().left + productCard.outerWidth()));
        let cartPosition = $('.header__top__link--cart');
        let cr = ($(window).width() - (cartPosition.offset().left + cartPosition.outerWidth() - 20));
        $.ajax({
            type: "POST",
            url: getBaseAjaxUrl() + '/cart/add?id=' + id,
            data: {id: id, quantity: num},
            success: function (result) {
                $('body').append('<div class="floating-cart"></div>');
                var aCart = $('div.floating-cart');
                productImg.clone().addClass('img-fluid').appendTo(aCart);
                $(aCart).css({
                    'top': position.top + 'px',
                    "right": rt + 'px'
                }).fadeIn("slow").addClass('moveToCart');

                $(aCart).css({
                    'top': cartPosition.offset().top + 'px',
                    "right": cr + 'px'
                })


                setTimeout(function () {
                    $("body").addClass("MakeFloatingCart");
                }, 1000);

                setTimeout(function () {
                    $('div.floating-cart').remove();
                    $("body").removeClass("MakeFloatingCart");
                }, 1000);

                $('#cart-count').text(result);
                $("#cart-content").load(location.href + " #cart-content");

                if (cart) {
                    $.pjax.reload({container: "#cart-index"});
                } else {
                    $.pjax.reload({container: "#cart"});
                }
            }
        });
    } else {
        let messages = {
            ru: {
                title: 'Товар добавлен в корзину',
                message: 'Нажмите, что бы оформить заказ'
            },
            uz: {
                title: 'Mahsulot savatchaga qoʻshildi',
                message: 'Savatchaga oʻtish uchun oynani bosing'
            },
            oz: {
                title: 'Маҳсулот саватчага қўшилди',
                message: 'Саватчага ўтиш учун ойнани босинг'
            }
        };
        $.ajax({
            type: "POST",
            url: getBaseAjaxUrl() + '/cart/add?id=' + id,
            data: {id: id, quantity: num},
            success: function (result) {
                $('#cart-count').text(result);
                if (cart) {
                    $.pjax.reload({container: "#cart-index"});
                } else {
                    showNotify('/cart/checkout', messages[lang].title, messages[lang].message);
                    $.pjax.reload({container: "#cart"});
                }
            }
        });
    }
}

function addToCompare(id, cart = false) {
    var lang = document.documentElement.lang;
    let messages = {
        ru: {
            title: 'Товар добавлен в сравнении',
            message: 'Нажмите для перехода в страницу сравнении'
        },
        uz: {
            title: 'Mahsulot taqqoslashga qo\'shildi',
            message: 'Taqqoslash sahifasiga o\'tish uchun oynani bosing'
        },
        oz: {
            title: 'Маҳсулот таққослашга қўшилди',
            message: 'Таққослаш саҳифасига ўтиш учун ойнани босинг'
        }
    };
    $.ajax({
        type: "POST",
        url: getBaseAjaxUrl() + '/compare/add?id=' + id,
        data: {id: id},
        success: function (result) {
            showNotify('/compare/index', messages[lang].title, messages[lang].message);
            $('#compare-count').removeAttr('hidden').html(result);
        }
    })
}

function setCookie(key, value) {
    let expires = new Date();
    expires.setTime(expires.getTime() + 3600 * 24 * 30); //1 year
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    let keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function showNotify(url, title, message, type = "info") {
    $.notify({
        // options
        // icon: 'glyphicon glyphicon-warning-sign',
        title: title,
        message: message,
        url: url,
        target: '_self'
    }, {
        // settings
        element: 'body',
        position: null,
        type: type,
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        url_target: '_self',
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span style="margin-right: 10px" data-notify="title">{1}</span> ' +
            '<div><span style="margin-right: 10px" data-notify="message">{2}</span></div>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}


function show_modal(id) {
    let url = '/product/quick-view?id=' + id;
    $('.modal-body').load(url);
}

function show_installment(id) {
    $('#installment .modal-content').html('');
    $('#installment .modal-content').load(getBaseAjaxUrl() + '/product/installment?id=' + id);

    setInterval(() => {
        $("input[type=radio][name='installment']").on("change", function (e) {
            $(this).closest('.i__month').closest('.col-6').closest('.i__months').closest('.modal-body').find('.i__total-price').text($(this).data('value'))
        });
    }, 100)
}

function more_installment() {
    $('#installment .modal-content').html('');
    $('#installment .modal-content').load(getBaseAjaxUrl() + '/cart/more-installment');
    setInterval(() => {
        $("input[type=radio][name='installment']").on("change", function (e) {
            $(this).closest('.i__month').closest('.col-6').closest('.i__months').closest('.modal-body').find('.i__total-price').text($(this).data('price'))
        });
    }, 100)
}

function not_installment() {
    var url = getBaseAjaxUrl() + '/cart/not-installment';
    $('#installment .modal-content').html('');
    $('#installment .modal-content').load(url);
    setInterval(() => {
        $("input[type=radio][name='installment']").on("change", function (e) {
            $(this).closest('.i__month').closest('.col-6').closest('.i__months').closest('.modal-body').find('.i__total-price').text($(this).data('price'))
        });
    }, 100)
}

function show_one_click(id) {
    // $('#one-click .modal-content').html('');
    $('#one-click .modal-body').load(getBaseAjaxUrl() + '/product/one-click?id=' + id);
    $('#one-click-phone-number').focus();
}

$(document).ready(function () {
    //Open Search
    $('.form-search').click(function (event) {
        $(".instant__results").fadeIn('slow').css('height', 'auto');
        event.stopPropagation();
    });

    $('body').click(function () {
        $(".instant__results").fadeOut('500');
    });
});

let typingTimer;                //timer identifier
let doneTypingInterval = 500;  //time in ms, 5 second for example
let $input = $('.search-input');

//on keyup, start the countdown
$input.keyup(delay(function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping($(this).val()), doneTypingInterval);
}, 500));

// $input.on('keyup', function () {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(doneTyping($(this).val()), doneTypingInterval);
// });

//on keydown, clear the countdown
$input.on('keydown', function () {
    clearTimeout(typingTimer);
});

function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}

//user is "finished typing," do something
function doneTyping(value) {
    new_value = value.replace("<", "");
    new_value = value.replace(">", "");
    new_value = value.replace("javascript:alert()", "");
    new_value = value.replace("alert()", "");
    if (new_value === value) {
        if (value && value.length > 0)
            $('.instant__results').load(getBaseAjaxUrl() + '/product/list?' + $.param({key: value}));
        else
            $('.instant__results').html("");
    }
}

// login and partner js code
let showPass = 0;
$('.btn-show-pass').on('click', function () {
    if (showPass == 0) {
        $(this).next('input').attr('type', 'text');
        $(this).find('i').removeClass('fa-eye');
        $(this).find('i').addClass('fa-eye-slash');
        showPass = 1;
    } else {
        $(this).next('input').attr('type', 'password');
        $(this).find('i').removeClass('fa-eye-slash');
        $(this).find('i').addClass('fa-eye');
        showPass = 0;
    }
});

function shareProduct(id) {
    $.ajax({
        url: getBaseAjaxUrl() + '/ajax/share-product',
        type: 'POST',
        data: {id: id}
    });
}

function showLoader() {
    $('#as__loader').show();
}

function closeLoader() {
    $('#as__loader').hide();
}

var timeout;

$(document).ready(function () {
    $('.mega__menu-list > li > .tab-open').on('mouseenter', function () {
        var thisElement = $(this);

        if (timeout != null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
            $(".mega__menu-right > .tab-content").removeClass('tab-active');
            $(".mega__menu-right > .tab-content[data-id='" + thisElement.attr('data-id') + "']").addClass("tab-active");
            $(".mega__menu-list > li >.tab-open").removeClass('opened');
            thisElement.parent().find(".tab-open").addClass('opened');
        }, 250);
    });

    $('.mega__menu-list > li > .tab-open').on('mouseleave', function () {
        if (timeout != null) {
            clearTimeout(timeout);

            timeout = null;
        }
    });
});

function showStatusNotify(status) {
    var langShowStatusNotify = document.documentElement.lang;
    let text_status = status;
    if (status == 'must-login' || status == 'incorrect-passport')
        status = 'danger';
    let messages = {
        'success': {
            ru: {
                title: 'Успешно сохранён',
                massage: ''
            },
            uz: {
                title: 'Maʼlumotlar saqlandi',
                massage: ''
            },
            oz: {
                title: 'Маълумотлар сақланди',
                massage: ''
            }
        },
        'danger': {
            ru: {
                title: 'Ошибка в сохранение. Попробуйте позже',
                message: ''
            },
            uz: {
                title: 'Maʼlumotlar saqlanmadi. Keyinroq urinib koʻring',
                message: ''
            },
            oz: {
                title: 'Маълумотлар сақланди. Кейинроқ уриниб кўринг',
                message: ''
            }
        },
        'must-login': {
            ru: {
                title: 'Ошибка в сохранение. Пожалуйста войдите в систему',
                message: ''
            },
            uz: {
                title: 'Maʼlumotlar saqlanmadi. Avvalo tizimga kirishingiz kerak',
                message: ''
            },
            oz: {
                title: 'Маълумотлар сақланди. Кейинроқ уриниб кўринг',
                message: ''
            }
        },
        'incorrect-passport': {
            ru: {
                title: 'Ваши паспортные данные неверны',
                message: 'Введите серийный номер паспорта и дату рождения правильно'
            },
            uz: {
                title: 'Passport ma\'lumotlaringiz noto\'g\'ri',
                message: 'Passport seria raqam va tug\'ilgan kuningizni to\'g\'ri kiriting'
            },
            oz: {
                title: 'Маълумотлар сақланди. Кейинроқ уриниб кўринг',
                message: ''
            }
        }
    };
    $.notify({
        title: messages[text_status][langShowStatusNotify]['title'],
    }, {
        // settings
        element: 'body',
        position: null,
        type: status,
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span style="margin-right: 10px" data-notify="title">{1}</span> ' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '</div>'
    });
}

function showStatusPromoNotify(status) {
    var langShowStatusPromoNotify = document.documentElement.lang;
    let text_status = status;
    if (status === 'must-login')
        status = 'danger';
    let messages = {
        'success': {
            ru: {
                title: 'Промокод успешно добавлен',
                massage: ''
            },
            uz: {
                title: 'PromoCode muvaffaqiyatli qo\'shildi',
                massage: ''
            },
            oz: {
                title: 'ПромоCоде муваффақиятли қўшилди',
                massage: ''
            }
        },
        'danger': {
            ru: {
                title: 'Промокод больше не найден снова попробуйте еще раз',
                message: ''
            },
            uz: {
                title: 'PromoCode topilmadi qayta urinib ko\'ring',
                message: ''
            },
            oz: {
                title: 'ПромоCоде топилмади қайта уриниб кўринг',
                message: ''
            }
        },
        'must-login': {
            ru: {
                title: 'Ошибка в сохранение. Пожалуйста войдите в систему',
                message: ''
            },
            uz: {
                title: 'Maʼlumotlar saqlanmadi. Avvalo tizimga kirishingiz kerak',
                message: ''
            },
            oz: {
                title: 'Маълумотлар сақланди. Кейинроқ уриниб кўринг',
                message: ''
            }
        }
    };
    $.notify({
        title: messages[text_status][langShowStatusPromoNotify]['title'],
    }, {
        // settings
        element: 'body',
        position: null,
        type: status,
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span style="margin-right: 10px" data-notify="title">{1}</span> ' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '</div>'
    });
}

function showPayNotify(status) {
    var langShowStatusPromoNotify = document.documentElement.lang;
    let text_status = status;
    if (status === 'must-login')
        status = 'danger';
    let messages = {
        'success': {
            ru: {
                title: 'Oплата прошла успешно',
                massage: ''
            },
            uz: {
                title: 'To\'lov muvaffaqiyatli amalga oshirildi',
                massage: ''
            }
        },
        'danger': {
            ru: {
                title: 'Платеж не выполнен. Повторите попытку позже.',
                message: ''
            },
            uz: {
                title: 'To\'lov amalga oshmadi, keyinroq qayta urinib ko\'ring',
                message: ''
            }
        },
    };
    $.notify({
        title: messages[text_status][langShowStatusPromoNotify]['title'],
    }, {
        // settings
        element: 'body',
        position: null,
        type: status,
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span style="margin-right: 10px" data-notify="title">{1}</span> ' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '</div>'
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.file-upload-image').attr('src', e.target.result);

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    let input = $('#profileform-avatar');
    $('#if-empty-avatar').val(1);
    input.val('');
    $('.file-upload-image').attr('src', input.data('template'));
}

$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

var loginWithNumber = $('.login__withnumber');
var loginWithMail = $('.login__withmail');

function withMail() {
    loginWithNumber.hide();
    loginWithMail.show();
}

function withNumber() {
    loginWithMail.hide();
    loginWithNumber.show();
}

$('#pay_card').on('click change', function () {
    $('.pay__with-card').fadeIn();
});

$('#pay_cash').on('click change', function () {
    $('.pay__with-card').fadeOut();
});


$('#pay_balance').on('click change', function () {
    $('.pay__with-card').fadeOut();
});

$('#pay_login').on('click change', function () {
    $('.pay__with-card').fadeOut();
});

var day = document.querySelector('#dayProductCountdown')

function makeTimer() {
    var time = day.getAttribute('data-today');
    var cur = new Date();
    time -= cur.getTime();
    var now = new Date(time);
    // console.log(now.getTime());
    time = Math.floor(time / 1000);

    if (time === 0) {
        window.location.reload();
    }

    var days = Math.floor(time / 86400);
    time -= days * 86400;
    var hours = Math.floor(time / 3600);
    time -= hours * 3600;
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;
    var seconds = time;
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

}

if ($('#dayProductCountdown').length > 0)
    setInterval(function () {
        makeTimer();
    }, 1000);

function addToFavourites(elem, product_id) {
    let icon = $(elem).find('img');
    let favourite_elem = document.querySelector('#favourite-count');
    let is_save = 0, cnt = parseInt(favourite_elem.textContent);

    if (icon.attr('src') === "/custom-assets/images/icons/heart.svg") {
        is_save = 1;
        icon.attr('src', '/custom-assets/images/icons/heart-full.svg');
    } else {
        icon.attr('src', '/custom-assets/images/icons/heart.svg');
    }

    $.ajax({
        url: getBaseAjaxUrl() + '/ajax/add-to-favourite',
        data: {product_id: product_id, save: is_save},
        success: function (result) {
            if (is_save) cnt++;
            else cnt = Math.max(0, --cnt);
            favourite_elem.textContent = cnt.toString();
            console.log(cnt);
            $.pjax.reload({container: "#cart-index"});
        }
    });
}

function removeFromFavourites(product_id) {
    let favourite_elem = document.querySelector('#favourite-count');
    let is_save = 0, cnt = parseInt(favourite_elem.textContent);
    $.ajax({
        url: getBaseAjaxUrl() + '/ajax/add-to-favourite',
        data: {product_id: product_id, save: is_save},
        success: function (result) {
            if (is_save) cnt++;
            else cnt = Math.max(0, --cnt);
            favourite_elem.textContent = cnt.toString();
            console.log(cnt);
            $.pjax.reload({container: "#favourite-index"});
        }
    });
}

function toScroll(element) {
    let defaultAnchorOffset = 0;
    let anchor = $(element).attr('data-href');

    let anchorOffset = $('.' + anchor).attr('data-anchor-offset');
    if (!anchorOffset)
        anchorOffset = defaultAnchorOffset;

    $('html,body').animate({
        scrollTop: $('.' + anchor).offset().top - anchorOffset
    }, 800);
}

$('.chat_widget-button').click(function () {
    $('.chat_widget-content').toggleClass('d-none')
})

$('.chat_widget-close').click(function () {
    $('.chat_widget-content').addClass('d-none')
    $('.chat_widget-types').removeClass('d-none')
    $('.chat_widget-window').addClass('d-none')
})

$('.chat_start_button').click(function () {
    $('.chat_widget-types').addClass('d-none')
    $('.chat_widget-window').removeClass('d-none')
})

$('.chat_hidden_button').click(function () {
    $('.chat_widget-content').addClass('d-none')
})


const inputField = document.getElementById('chatInput');

function autosize() {
  inputField.style.height = '24px';
  inputField.style.height = Math.min(100, Math.max(24, inputField.scrollHeight)) + 'px';
}

inputField.addEventListener('keydown', function (event) {
  autosize();
});