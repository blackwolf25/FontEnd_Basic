$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
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

    var currentScroll;
    $(".menu-icon").click(function(){
        $(".menu").slideToggle();
        currentScroll=$(window).scrollTop();

    });

    // $(window).scroll(function(){
    //     console.log(currentScroll);
    //     var afterscroll=$(window).scrollTop();
    //     if(afterscroll>currentScroll){
    //         $(".menu").slideUp();
    //     }
    // });
    // var currentScroll;
    // $(".menu-icon").click(function(){
    //     $(".menu").slideToggle();
    //     currentScroll=$(window).scrollTop();
    // });
    

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
    
    $(".next").click(function(){
         $('html,body').animate({ scrollTop: 0 }, 'slow');
    });

});