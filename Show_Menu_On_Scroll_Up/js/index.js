//fixed menu showing up when it's open
$('.top').show();

//using difference between scollTop() and last scrollTop to catch when user scrolls up
var lastScrollTop = 0;

$(document).scroll(function(){ 
   var st = $(this).scrollTop();

    
   if (st > lastScrollTop){
      $('.top').fadeOut();
       console.log("down");
       lastScrollTop = st;
       
   } else {
    $('.top').fadeIn();
       console.log("up");
       lastScrollTop = st;
   }
});

