$(document).ready(function() {
    "use strict"; // start of use strict
    let productName = $('#product-name').text();
    let productPrice = $('#product-price').text();
    const productInfo = {
        "name": productName,
        "price": productPrice
    }
    sessionStorage.setItem('productInfo', JSON.stringify(productInfo));
    /*==============================
    Menu
    ==============================*/
    $('.header__btn').on('click', function() {
        $(this).toggleClass('header__btn--active');
        $('.header__menu').toggleClass('header__menu--active');
    });

    $('.header__search .close, .header__action--search button').on('click', function() {
        $('.header__search').toggleClass('header__search--active');
    });

    /*==============================
    Multi level dropdowns
    ==============================*/
    $('ul.dropdown-menu [data-toggle="dropdown"]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass('show');
    });

    $(document).on('click', function(e) {
        $('.dropdown-menu').removeClass('show');
    });

    /*==============================
    Home slider
    ==============================*/
    $('.hero').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: false,
        smartSpeed: 600,
        autoHeight: true,
        items: 1,
        responsive: {
            0: {
                margin: 20,
            },
            576: {
                margin: 20,
            },
            768: {
                margin: 30,
            },
            1200: {
                margin: 30,
                mouseDrag: false,
            },
        }
    });

    /*==============================
    Carousel
    ==============================*/
    $('.main__carousel--collections').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: false,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 5,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.main__carousel--live').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.main__carousel--explore').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.main__carousel--authors').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 30,
                mouseDrag: false,
                dots: false,
            },
        }
    });

    $('.card__cover--carousel').owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 800,
        smartSpeed: 800,
        margin: 20,
        items: 1,
    });

    /*==============================
    Navigation
    ==============================*/
    $('.main__nav--prev').on('click', function() {
        var carouselId = $(this).attr('data-nav');
        $(carouselId).trigger('prev.owl.carousel');
    });
    $('.main__nav--next').on('click', function() {
        var carouselId = $(this).attr('data-nav');
        $(carouselId).trigger('next.owl.carousel');
    });

    /*==============================
    Partners
    ==============================*/
    $('.partners').owlCarousel({
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        margin: 20,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
                margin: 20,
            },
            768: {
                items: 4,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 6,
                margin: 30,
            },
            1900: {
                items: 8,
                margin: 30,
            },
        }
    });

    /*==============================
    Modal
    ==============================*/
    $('.open-video, .open-map').magnificPopup({
        disableOn: 0,
        fixedContentPos: true,
        type: 'iframe',
        preloader: false,
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });

    $('.asset__img').magnificPopup({
        fixedContentPos: true,
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'my-mfp-zoom-in',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 400
        }
    });

    $('.open-modal').magnificPopup({
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
    });

    $('.modal__close').on('click', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });




    /*==============================
    Select
    ==============================*/
    $('.main__select').select2({
        minimumResultsForSearch: Infinity
    });

    /*==============================
    Copy
    ==============================*/
    $('.author__code button').on('click', function() {
        var copyText = document.getElementById('author-code');
        copyText.select(); /* Select the text field */
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy"); /* Copy the text inside the text field */

        /* Alert the copied text */
        $(this).addClass('active');
        setTimeout(function() {
            $('.author__code button').removeClass('active');
        }, 1200);
    });

    /*==============================
    Section bg
    ==============================*/
    $('.main__video-bg, .author__cover--bg, .main__author, .collection__cover, .hero__slide').each(function() {
        if ($(this).attr('data-bg')) {
            $(this).css({
                'background': 'url(' + $(this).data('bg') + ')',
                'background-position': 'center center',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        }
    });

    /*==============================
    Upload file
    ==============================*/
    $('.sign__file-upload').on('change', function() {
        var videoLabel = $(this).attr('data-name');

        if ($(this).val() != '') {
            $(videoLabel).text($(this)[0].files[0].name);
        } else {
            $(videoLabel).text('Upload file');
        }
    });

    /*==============================
    Countdown
    ==============================*/
    $('.asset__clock').countdown('2022/12/01', function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
    });

    $('.card__clock--1').countdown('2022/12/01', function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });

    $('.card__clock--2').countdown('2023/11/01', function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });

    /*==============================
    Scrollbar
    ==============================*/
    var Scrollbar = window.Scrollbar;

    if ($('#asset__actions--scroll').length) {
        Scrollbar.init(document.querySelector('#asset__actions--scroll'), {
            damping: 0.1,
            renderByPixels: true,
            alwaysShowTracks: true,
            continuousScrolling: false,
        });
    }

    /*==============================
    	Take a bid
    	==============================*/
    $('#buy-item').on('click', (e) => {
        console.log('111')
        let aaa = document.getElementById("product-price").innerText;
        let price = aaa;
        let mprice = "";
        let c = 'f';
        for (let i = 0; i < price.length; i++) {
            if (price[i] === ' ') continue;
            if (price[i] === '.') {
                mprice += price[i];
                continue;
            }
            if (price[i] <= '9' && price[i] >= '0') {
                mprice += price[i];
                continue;
            }
            if (price[i] === 'B') {
                mprice = Number(mprice);
                mprice *= 1000000000;
                break;
            }
            if (price[i] === 'M') {
                mprice = Number(mprice);
                mprice *= 1000000;
                break;
            }
            if (price[i] === 'K') {
                mprice = Number(mprice);
                mprice *= 1000;
                break;
            }

            break;

        }
        sessionStorage.setItem('PrIcE', mprice);
        let amount = sessionStorage.getItem('PrIcE');
        let bid_ammound = "";
        for (let i = 0; i < amount.length; i++) {
            if (amount[i] === ' ') break;
            bid_ammound += amount[i];
        }
        console.log(bid_ammound)
        const product_name = document.getElementById('product-name').innerText;
        console.log(product_name)
        if (!bid_ammound) {
            alert('Enter a bid ammount!');
            return;
        }
        if (!product_name) {
            alert('try again!');
            return;
        }
        const data = {
            bid_ammound,
            product_name
        };


        sessionStorage.setItem('data', JSON.stringify(data));

        window.location = "checkout.html"
    })

    // Iframe height
    const width = $('#iframe-sec').width();
    let height = (1280 / 1920) * width;
    $('#iFrame1').attr("height", height + 'px');
    $('#iFrame1').attr("width", width + 'px');

    //buy now




});




//custom JS


$('head').append('<link href="libs/bootstrap/css/bootstrap-grid.css" rel="stylesheet"><link href="css/main1bce.css?v=6" rel="stylesheet"><link href="css/media.css" rel="stylesheet"><script src="js/jquery.js"></script><script src="js/functions30f4.js?v=3"></script>');

$(".header__content").append('<div id="navigation"><div class="container"><div class="navigation__box"><div class="navigation__list"><ul class=""><li><a href="http://safecitydemo.com/home/">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li></ul></div></div></div></div><div id="top__line"><div class="top_line container"><div class="row justify-content-between align-items-center"><div class="top__line-left"><div class="top__line-logo"><a href="http://safecitydemo.com/home" class="logo"><img src="img/logo.png" alt=""></a></div><div class="menu_list"><ul class=""><li><a href="http://safecitydemo.com/home">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li><li class="buyBtn"><a href="http://safecitydemo.com/app/safeswap.html"  ,>BUY SFCN</a></li></ul></div><div class="walletInfo"><div class="balance">ETH</div>&nbsp;&nbsp;<div class="address"></div></div></div><div class="top__line-right"><button class="buyBtn" onclick="window.location.href=\'http://safecitydemo.com/app/safeswap.html\'">BUY SFCN</button><div class="button_toogle button_toogle-nav"><button class="c-hamburger c-hamburger--htx btn-open"><span></span></button></div></div></div></div></div></div></header>')
    //$(".header__content").append('<div id="navigation"><div class="container"><div class="navigation__box"><div class="navigation__list"><ul class=""><li><a href="http://safecitydemo.com/home/">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li></ul></div></div></div></div><div id="top__line"><div class="top_line container"><div class="row justify-content-between align-items-center"><div class="top__line-left"><div class="top__line-logo"><a href="http://safecitydemo.com/home" class="logo"><img src="img/logo.png" alt=""></a></div><div class="menu_list"><ul class=""><li><a href="http://safecitydemo.com/home">HOME</a></li><li><a href="http://safecitydemo.com/app/">APP</a></li><li><a href="http://safecitydemo.com/home/whitepaper.html" target="_blank">WHITEPAPER</a></li><li><a href="http://safecitydemo.com/home/roadmap.html"  ,>ROADMAP</a></li><li><a href="https://map.safecitydemo.com/"  ,>EXPLORE</a></li><li><a href="https://safe.city/safex/metavarse.html"  ,>MARKETPLACE</a></li><li class="buyBtn"><a href="http://safecitydemo.com/app/safeswap.html"  ,>BUY SFCN</a></li></ul></div></div><div class="top__line-right"><button class="buyBtn" onclick="window.location.href=\'http://safecitydemo.com/app/safeswap.html\'">BUY SFCN</button><div class="button_toogle button_toogle-nav"><button class="c-hamburger c-hamburger--htx btn-open"><span></span></button></div></div></div></div></div></div></header>')
    //document.getElementById("buy-item").innerHTML ='BID NOW <img src="icon/arw.png">';