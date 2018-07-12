//fixed menu showing up when it's open
$('.top').show();

//using difference between scollTop() and last scrollTop to catch when user scrolls up
//var lastScrollTop = 0;
//
//$(document).scroll(function(){ 
//    var st = $(this).scrollTop();
//
//
//    if (st > lastScrollTop){
//        $('.top').fadeOut();
//        console.log("down");
//        lastScrollTop = st;
//
//    } else {
//        $('.top').fadeIn();
//        console.log("up");
//        lastScrollTop = st;
//    }
//});


$(document).scroll(function(){
    var ani = $(this).scrollTop();

    if (ani < 200){
        $('.ani').fadeIn();

    } else {
        $('.ani').fadeOut();
    }

});


$('.ani1').hide();

$(document).scroll(function(){
    var ani1 = $(this).scrollTop();

    if (ani1 > 50){
        $('.ani1').fadeIn();

    } else {
        $('.ani1').fadeOut();
    }

});

$('.ani2').hide();

$(document).scroll(function(){
    var ani2 = $(this).scrollTop();

    if (ani2 > 120){
        $('.ani2').fadeIn();

    } else {
        $('.ani2').fadeOut();
    }

});

