$("html").hide();
$(function() {
    $("html").hide().delay(1000).fadeIn(2200);
    $('.container').css({
        'max-width': window.screen.width / 3
    });
}); 