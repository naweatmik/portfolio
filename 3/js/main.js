$(function(){

    // typeIt
    new TypeIt(".type", {
        strings: ["Vintage", "Furniture", " ", "Limited", "Items"],
        speed: 70,
        waitUntilVisible: true,
    }).go();

    
    // recently in price & description
    $(".recent .row .r-img-wrap img").hover(function(){
        $(this).siblings(".recent .row .r-img-wrap .r-img-description").css({display:'flex'});
    },function(){
        $(this).siblings(".recent .row .r-img-wrap .r-img-description").css({display:'none'});
    });

    $(".recent .row h2").hover(function(){
        $(".recent .row h2").css({color:"#EF421C"})
    },function(){
        $(".recent .row h2").css({color:"#000"})
    });


    // current products when hovered

    //sofa
    $(".current #sofa .sofa-imgs .sofa-wrap").hover(function(){
        $(this).css({backgroundColor:"rgb(0, 0, 0, 0.7)"});
        $(this).find(".sofa-img-wrap .price").css({display:'block'});
        $(this).find(".sofa-img-wrap img").css({filter:'brightness(0.1)'});
        $(this).find(".name").css({color:'#fff'});

    },function(){
        $(this).css({backgroundColor:"transparent"});
        $(this).find(".sofa-img-wrap .price").css({display:'none'});
        $(this).find(".sofa-img-wrap img").css({filter:'brightness(1)'});
        $(this).find(".name").css({color:'#000'});
    });

    // chair
    $(".current #chair .chair-imgs .chair-wrap").hover(function(){
        $(this).css({backgroundColor:"rgb(0, 0, 0, 0.7)"});
        $(this).find(".chair-img-wrap .price").css({display:'block'});
        $(this).find(".chair-img-wrap img").css({filter:'brightness(0.1)'});
        $(this).find(".name").css({color:'#fff'});

    },function(){
        $(this).css({backgroundColor:"transparent"});
        $(this).find(".chair-img-wrap .price").css({display:'none'});
        $(this).find(".chair-img-wrap img").css({filter:'brightness(1)'});
        $(this).find(".name").css({color:'#000'});
    });

    // table
    $(".current #table .table-imgs .table-wrap").hover(function(){
        $(this).css({backgroundColor:"rgb(0, 0, 0, 0.7)"});
        $(this).find(".table-img-wrap .price").css({display:'block'});
        $(this).find(".table-img-wrap img").css({filter:'brightness(0.1)'});
        $(this).find(".name").css({color:'#fff'});

    },function(){
        $(this).css({backgroundColor:"transparent"});
        $(this).find(".table-img-wrap .price").css({display:'none'});
        $(this).find(".table-img-wrap img").css({filter:'brightness(1)'});
        $(this).find(".name").css({color:'#000'});
    });

    // lamp
    $(".current #lamp .lamp-imgs .lamp-wrap").hover(function(){
        $(this).css({backgroundColor:"rgb(0, 0, 0, 0.7)"});
        $(this).find(".lamp-img-wrap .price").css({display:'block'});
        $(this).find(".lamp-img-wrap img").css({filter:'brightness(0.1)'});
        $(this).find(".name").css({color:'#fff'});

    },function(){
        $(this).css({backgroundColor:"transparent"});
        $(this).find(".lamp-img-wrap .price").css({display:'none'});
        $(this).find(".lamp-img-wrap img").css({filter:'brightness(1)'});
        $(this).find(".name").css({color:'#000'});
    });

    // decor
    $(".current #decor .decor-imgs .decor-wrap").hover(function(){
        $(this).css({backgroundColor:"rgb(0, 0, 0, 0.7)"});
        $(this).find(".decor-img-wrap .price").css({display:'block'});
        $(this).find(".decor-img-wrap img").css({filter:'brightness(0.1)'});
        $(this).find(".name").css({color:'#fff'});

    },function(){
        $(this).css({backgroundColor:"transparent"});
        $(this).find(".decor-img-wrap .price").css({display:'none'});
        $(this).find(".decor-img-wrap img").css({filter:'brightness(1)'});
        $(this).find(".name").css({color:'#000'});
    });


    // sale
    $(".current #sale img").hover(function(){
        $(this).siblings(".current #sale .prev-price, .sale-price").css({display:'block'});
    },function(){
        $(this).siblings(".current #sale .prev-price, .sale-price").css({display:'none'});
    });

});