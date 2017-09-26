//Nasir Uddin

// to fix the menu/navigation bar on top  during the scrolling
$(document).ready(function(){

    $(window).scroll(function(){

        if ($(window).scrollTop() > 640) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 641) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
});

// Make a smooth scroll effect for different buttons

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 754, 'swing', function () {
        window.location.hash = target;
    });
});



// waypoint animation
$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated zoomIn');
}, {
    offset: '50%'
});

$('.js-wp-5').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated fadeInDownBig');
}, {
    offset: '70%'
});



