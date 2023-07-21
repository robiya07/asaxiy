var swiperNav = new Swiper(".slider-more-about-nav", {
    spaceBetween: 10,
    slidesPerView: 4,
    mousewheel: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    direction: "vertical",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperFor = new Swiper(".slider-more-about-for", {
    spaceBetween: 30,
    effect: "cube",
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
    thumbs: {
        swiper: swiperNav,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiperRec = new Swiper(".recommends", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    mousewheel: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$.fancybox.defaults.thumbs.autoStart = true;

let fb_link = $('#sharelink-facebook').attr('href');
let tw_link = $('#sharelink-twitter').attr('href');
let tg_link = $('#sharelink-telegram').attr('href');
let ws_link = $('#sharelink-whatsapp').attr('href');

$().fancybox({
    selector: '.slider-more-about-for .swiper-slide',
    backFocus: false,
    thumbs: {
        autoStart: false, // Display thumbnails on opening
    },
    buttons: [
        "zoom",
        "download",
        'share',
        "slideShow",
        "thumbs",
        "close"
    ],
    share: {
        url: function (instance, item) {
            return (
                (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
            );
        },
        tpl:
            '<div class="fancybox-share">' +
            "<h1>{{SHARE}}</h1>" +
            "<p>" +
            '<a class="fancybox-share__button fancybox-share__button--fb" href="' + fb_link + '">' +
            '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
            "<span>Facebook</span>" +
            "</a>" +
            '<a class="fancybox-share__button fancybox-share__button--tw" href="' + tw_link + '">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#36D8FF"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/></svg>' +
            "<span>Twitter</span>" +
            "</a>" +
            '<a class="fancybox-share__button fancybox-share__button--wt" href="' + ws_link + '">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>' +
            "<span>Whatsapp</span>" +
            "</a>" +
            '<a class="fancybox-share__button fancybox-share__button--tg" href="' + tg_link + '">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/></svg>' +
            "<span>Telegram</span>" +
            "</a>" +
            "</p>" +
            '<p><input class="fancybox-share__input" type="text" value="' + window.location.href + '" /></p>' +
            "</div>"
    }
});