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
	$('.owl-carousel .owl-nav .owl-prev span').html('<i class="fas fa-arrow-left"></i>');
	$('.owl-carousel .owl-nav .owl-next span').html('<i class="fas fa-arrow-right"></i>'); 
  function tabs(numb){
    $('.dot'+numb).click(function(){
      for(var i=0; i < 5 ; i++){
        if(i != numb)
          $('.contenttab'+i).hide();
          $("i.dot" +i).css("font-size", "30px");
      }
      $('.contenttab'+numb).fadeIn();
      $("i.dot" +numb).css("font-size", "45px");
    })
  }
  for(var i = 1 ; i < 5 ;i++)
    tabs(i);
  // Window on load
  $(window).on('load', function(){

  });
  
});