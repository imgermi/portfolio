$(document).ready(function (){

    $("#check-works").click(function (){
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

    $("#contact-me").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });

});