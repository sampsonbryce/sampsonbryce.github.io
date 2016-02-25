$(document).ready(function() {
    // navigation click actions
    $('.scroll-link').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$($(this).attr("href")).offset().top
        }, 700, 'easeInOutExpo');
    });
});
