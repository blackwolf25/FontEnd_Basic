jQuery(document).ready(function($){
	var currentScroll;
	$(".menu-icon").click(function(){
		$(".menu").animate({
			width: "toggle"
		});
		currentScroll = $(window).scrollTop();

	});

  	$(window).scroll(function(){
        // console.log(currentScroll);
        // console.log("test");
        if($(window).width() <768){
            var afterscroll=$(window).scrollTop();
            if(afterscroll!=currentScroll){
                $(".menu").hide("slow");
            }
        }
    });
    $(window).resize(function(){
        if($(window).width()>768){
        $(".menu").slideDown();
    }else{
        $(".menu").slideUp(0);
    }
    });
  
});