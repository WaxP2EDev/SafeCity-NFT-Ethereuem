// click outside element
$(document).click(function(e) {
  if ($(e.target).closest('.tab-item,.js-help').length) {
    // клик внутри элемента 
    return;
  }
  $(".js-help").removeClass("active");
  $(".tab-item").removeClass("active");
});
// click outside element
$(document).click(function(e) {
  if ($(e.target).closest('.js-concept,.tab-concept').length) {
    // клик внутри элемента 
    return;
  }
  $(".js-concept").removeClass("active");
  $(".tab-concept").removeClass("active");
});
$(document).ready(function() {
  $(".button_toogle").click(function() {
    $('#navigation').toggleClass("active");
    $('html').toggleClass("overflow");
  });
  $(".js-help").click(function(e) {
    e.preventDefault();
    var tab = $(this).prop("id");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      hideTab(tab)
    } else {
      $(".tab-item").removeClass("active");
      $(".btn-help").removeClass("active");
      $(this).addClass("active");
      showTab(tab)
    }
  });

  function showTab(number) {
    $(this).addClass("active");
    $('[data-help=' + number + ']').addClass("active");
  }

  function hideTab(number) {
    $('[data-help=' + number + ']').removeClass("active");
  }
  $(".js-concept").click(function(e) {
    e.preventDefault();
    var tab = $(this).prop("id");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      hideTabConcept(tab)
    } else {
      $(".tab-concept").removeClass("active");
      $(".btn-help").removeClass("active");
      $(this).addClass("active");
      showTabConcept(tab)
    }
  });

  function showTabConcept(number, top) {
    $(this).addClass("active");
    $('[data-concept=' + number + ']').addClass("active");
  }

  function hideTabConcept(number) {
    $('[data-concept=' + number + ']').removeClass("active");
  }
  var margin = 0
  var marginMedium = 0
  $(window).on('load resize', function(e) {
    margin = $(".item-width")[0].getClientRects()[0].x;
    marginConcept = $(".item-width-concept")[0].getClientRects()[0].x;
    marginMedium = $(".item-width-medium")[0].getClientRects()[0].x - 15;
    $(".features-slider").find(".slick-list").css({
      "padding-left": margin,
      "padding-right": margin
    });
    $(".features-slider").find(".slick-next").css("right", margin - 50);
    $(".features-slider").find(".slick-prev").css("left", margin - 50);
    // Concept slider
    $(".concept-slider").find(".slick-list").css({
      "padding-left": marginConcept,
      "padding-right": marginConcept
    });
    $(".concept-slider").find(".slick-next").css("right", marginConcept + 20);
    $(".concept-slider").find(".slick-prev").css("left", marginConcept + 20);
    if (window.innerWidth < 1420 && window.innerWidth > 768) {
      $(".medium-slider").find(".slick-list").css({
        "padding-left": marginMedium,
        "padding-right": marginMedium
      });
    } else if (window.innerWidth < 768) {
      $(".medium-slider").find(".slick-list").css({
        "padding-left": "0",
        "padding-right": "10%"
      });
    }
  }).trigger('resize');
  $('.features-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    infinite: true,
     initialSlide: 1,
    centerPadding: margin,
    focusOnSelect: true,
    arrows: true
  });
  $('.medium-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    arrows: true,
    centerMode: true,
    centerPadding: marginMedium,
    responsive: [{
      breakpoint: 1600,
      settings: {
        fade: false,
        slidesToShow: 4
      }
    }, {
      breakpoint: 1420,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 980,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 560,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }]
  });
  // $('.features-slider')
  // .on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   $('.slick-list').addClass('do-transition')
  // })
  // .on('afterChange', function(){
  //   $('.slick-list').removeClass('do-transition')
  // });
  (function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
      });
    }
  })();
  $(window).on('load resize', function(e) {
    var init = $(".map__items").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 992) {
      // Если слайдер не запущен
      $(".map__items").css("height", "inherit")
      if (init != 1) {
        $('.map__items').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          focusOnSelect: true,
          arrows: false
        }).data({
          'init-slider': 1
        });
      }
    } else {
      if (init == 1) {
        $('.map__items').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');
  $(window).on('load resize', function(e) {
    var init = $(".concept-slider").data('init-slider');
    // Если мобильный
    if (window.innerWidth > 768) {
      // Если слайдер не запущен
      if (init != 1) {
        $('.concept-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          centerMode: true,
          initialSlide: 2,
          centerPadding: margin,
          focusOnSelect: true,
          arrows: true
        }).data({
          'init-slider': 1
        });
      }
    } else {
      if (init == 1) {
        $('.concept-slider').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');
  $(window).on('load resize', function(e) {
    var init = $(".roadmap-slider").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 992) {
      // Если слайдер не запущен
      if (init != 1) {
        $('.roadmap-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: 30,
          focusOnSelect: true,
          arrows: true
        }).data({
          'init-slider': 1
        });
      }
    } else {
      if (init == 1) {
        $('.roadmap-slider').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');
});


// js for video
$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');

  $wrapper.addClass('videoWrapperActive');

  $iframe.attr('src',src + '&autoplay=1');
}

function videoStop($wrapper) {

  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  $wrapper.removeClass('videoWrapperActive');
  $iframe.attr('src','');
}