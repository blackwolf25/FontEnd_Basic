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
            items:1
        },
        1000:{
            items:1
        }
    }
});
	$(".menu-icon").click(function(){
		$(".wrap-menu").slideToggle();
	});
  // Window on load
  $(window).on('load', function(){

  });
  
});