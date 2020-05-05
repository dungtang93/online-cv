jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    // animate the level bars when scrolled to
    $(window).scroll(function() {
        var hT = $('.level-bar').offset().top,
            hH = $('.level-bar').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > (hT + hH - wH)) {
            $('.level-bar-inner').each(function() {
                var itemWidth = $(this).data('level');
                $(this).animate({
                    width: itemWidth
                }, 800);
            });
        }
    });
});