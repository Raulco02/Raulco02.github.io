// Cambiar color del menú al hacer clic
$('.navbar-nav a').on('click', function() {
    $('.navbar-nav').find('a').removeClass('active');
    $(this).addClass('active');
});

// Cambiar color del menú al hacer scroll
$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();

    $('section').each(function() {
        var top = $(this).offset().top - 56,
            bottom = top + $(this).outerHeight();

        if (scrollPosition >= top && scrollPosition <= bottom) {
            $('.navbar-nav').find('a').removeClass('active');
            $('.navbar-nav').find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});