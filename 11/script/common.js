$(function(){
    
    let hamBtnClose = $(".ham.close");
    let ham = $(".ham");
    let nav = $(".nav_cover");
    let header = $("header");

    $(window).scroll(function(){
        
        let scroll = $(window).scrollTop();
        
        if(scroll > 1000){
            $(".reser").css({display:"block"})
        } else{
            $(".reser").css({display:"none"})
        }
    });

    $(".nav_menu>li").mouseover(function(){
        $(this).find(".nav_sub").stop(true).css({opacity:'1'});
    })
    .mouseout(function(){
        $(this).find(".nav_sub").stop(true).css({opacity:'0'});
    });

    $(".btn_site").click(function(){
        $(".site_list").stop().slideToggle(250);
        $(this).toggleClass('active');
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});