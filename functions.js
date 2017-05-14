$(document).ready(function (){

    $("#check-works").click(function (){
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

});

