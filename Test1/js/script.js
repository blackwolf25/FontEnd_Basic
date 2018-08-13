$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout: 5000,
		rewind:true,
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
				items:6
			}
		}
	});
	// $('.owl-carousel').ready(function(){
	// $('.owl-carousel').owlCarousel();
});