$(function(){
    
    let hamBtnClose = $(".ham.close");
    let ham = $(".ham");
    let nav = $(".nav_cover");
    let header = $("header");

    $(window).scroll(function(){
        
        let scroll = $(window).scrollTop();
        
        if(scroll > 1000){
            $(".top").css({display:"block"})
        } else{
            $(".top").css({display:"none"})
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

    $('.s5_card_content').click(function(){
        $(this).toggleClass('active');
    })

});