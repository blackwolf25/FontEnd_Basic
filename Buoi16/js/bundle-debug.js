jQuery(document).ready(function($){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
  })

  $(".country").click(function(){
    $(".list-icon").toggle();
  });
  // Window on load
  // $(window).on('load', function(){

  // });
  
});