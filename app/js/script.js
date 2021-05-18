$(function() {
    new WOW().init();
})

$(document).ready(function($) {

    $("footer #go-top").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});