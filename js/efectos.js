$(document).ready(function(){
    $('.navbar a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 +(index * 500));
    });


if ( $(window).width() > 800){
    $('.texto .titulo').css({
        opacity: 0,
        marginLeft: 0
    });
    $('.texto .titulo').animate({
        opacity: 1,
        marginLeft: '-52px'
    }, 1500);
}
});
