$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('header').addClass('sticky');
        $('.arrow').addClass('hide');
    }
    else {
        $('header').removeClass('sticky');
        $('.arrow').removeClass('hide');
    }
});

$(document).ready(function () {
    $(".cc").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        responsive: {
            0: {
                nav: false,
            },
            501: {
                nav: true,
            },
            1000: {
                nav: true,
            }
        }
    });
    $(".aa").owlCarousel({
        items: 3,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });
});
