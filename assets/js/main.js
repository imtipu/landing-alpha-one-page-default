(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 54
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });

        //Sticky Header
        $(".sticker").sticky({
            topSpacing: 0
        });

        //Counter Up
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });

        //Screenshot Slider
        $(".screenshot-slider").owlCarousel({
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        })

        //Screehshot Popup
        $('.screenshot-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });
        //Video Popup
        $('.video-popup').magnificPopup({
            type: 'video'
        });

        //AOS
        AOS.init();







    });


    //Preloader
    $(window).on('load', function () { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })


}(jQuery));
