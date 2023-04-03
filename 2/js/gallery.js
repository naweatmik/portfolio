$(function(){
  //slider
  $(".regular").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    });

    // opened menu
    $("header .top > a").click(function(){
      $("nav").css({display:'block'})
      $("html").css({overflow:'hidden'})
    });

    $("nav .close").click(function(){
      $("nav").css({display:'none'})
      $("html").css({overflow:'auto'})
    });


    // booking
    $(".currentexhibition .booking").hover(function(){
      $(".currentexhibition .booking").css({backgroundColor:'transparent',border:'0.85px solid #000',color:'#000'})
    },function(){
      $(".currentexhibition .booking").css({backgroundColor:'#000',border:'none',color:'#fff'})
    });



    // events
    $(".events .slider figure img").hover(function(){
      $(this).css({filter:'brightness(70%)'})
    },function(){
      $(this).css({filter:'brightness(100%)'})
    });

    $(".events>a").hover(function(){
      $(".events>a").css({fontWeight:'800'})
    },function(){
      $(".events>a").css({fontWeight:'400'})
    })


    
    // collection
    $(".figure-wrap img").hover(function(){
      $(this).css({filter:'brightness(65%)'})
    },function(){
      $(this).css({filter:'brightness(100%)'})
    });

    $(".collection dl .see-all").hover(function(){
      $(".collection dl .see-all").css({fontWeight:'800'})
    },function(){
      $(".collection dl .see-all").css({fontWeight:'400'})
    })


    // discover more
    $(".discover-wrap img").hover(function(){
      $(this).css({filter:'brightness(70%)'})
    },function(){
      $(this).css({filter:'brightness(100%)'})
    });

    $(".discover-wrap .discover-element").hover(function(){
      $(this).css({fontWeight:'600'})
    },function(){
      $(this).css({fontWeight:'400'})
    });

    // discover element 6
    $(".discover-element ul").height($('.discover-element > img').height());
    $(window).on('resize', function() {    
      let discovermoreImg = $('.discover-element > img').height();
      $(".discover-element ul").height(discovermoreImg);
      console.log(discovermoreImg)
    });



    // news-reads
    $(".news-reads ul li a .news").hover(function(){
      $(this).css({color:'#fff',backgroundColor:'#000'})
    },function(){
      $(this).css({color:'#000',backgroundColor:'#fff'})
    });

    $(".news-reads .more-pub").hover(function(){
      $(".news-reads .more-pub").css({fontWeight:'800'})
    },function(){
      $(".news-reads .more-pub").css({fontWeight:'400'})
    })



    // typeIt
    new TypeIt(".about-collection", {
      strings: ["120+", "Permanent collection", "Over 50 different artists"],
      speed: 60,
      waitUntilVisible: true,
    }).go();
    

  });
