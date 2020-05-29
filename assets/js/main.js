jQuery(document).ready(function($) {
    if ($('.level-bar').length > 0) {
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
    }
});

// skip animation when print to show the level bars
(function() {
    var beforePrint = function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).css({
                width: itemWidth
            }, 800);
        });
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            }
        });
    }

    window.onbeforeprint = beforePrint;
}());