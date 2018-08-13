$(document).ready(function(){
	var currentScroll;
	$(".user-manage").click(function(){
		$(".tab-left").slideToggle();
		currentScroll=$(window).scrollTop();

	});
	$(window).scroll(function(){
        console.log(currentScroll);
        // console.log(currentScroll.toString());
        if($(window).width() <780){
            var afterscroll=$(window).scrollTop();
            if(afterscroll!=currentScroll){
                $(".menu").slideUp();
            }
        }
    });
    $(window).resize(function(){
        if($(window).width()>780){
        $(".menu").slideDown();
    }else{
        $(".menu").slideUp(0);
    }
    });
});