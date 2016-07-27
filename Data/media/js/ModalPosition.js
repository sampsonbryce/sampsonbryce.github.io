$(document).ready(function() {
    $('.portfolio-link').click(function() {
        var id = $(this).attr('href');
        var offset = $(document).scrollTop();
        // Get the window viewport height
        viewportHeight = $(window).height();

        // cache your dialog element
        $myDialog = $(id);

        // now set your dialog position
        $myDialog.css('top', (offset + (viewportHeight / 20)));
    });
});
