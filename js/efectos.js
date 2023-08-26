$(document).ready(function(){
    $('.navbar a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 +(index * 500));
    });
});

$(document).ready(function(){
    $('.foto img').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
        }, 200 +(index * 500));
    });
});