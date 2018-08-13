// $(document).ready(function(){
// 	var currentScoll;
// 	$(".menu-icon").click(function(){
// 		$(".menu").slideToggle(slow);
// 		currentScoll = $(window).scrollTop();

// 	});
// });
$(document).ready(function(){
	var currentScroll;
	$(".menu-icon").click(function(){
		$(".menu").animate({
                width: "toggle"
            });
		currentScroll=$(window).scrollTop();
		// console.log(currentScroll);
	});
	$(window).scroll(function(){
        // console.log(currentScroll);
        // console.log("test");
        if($(window).width() <640){
            var afterscroll=$(window).scrollTop();
            if(afterscroll!=currentScroll){
                $(".menu").hide("slow");
            }
        }
    });
    $(window).resize(function(){
        if($(window).width()>640){
        $(".menu").slideDown();
    }else{
        $(".menu").slideUp(0);
    }
    });
    $(".top").click(function(){
        $("html,body").animate({ scrollTop: 0 },'slow');
        
    });

});