
  // main slide swiper
    var swiper = new Swiper(".main-slide", {
      slidesPerView: 'auto', // 슬라이드에 몇 개를 보여줄 것인지
      spaceBetween: 0, // 슬라이드 사이 거리
      loop : true, // 반복
      effect : 'fade', // 페이드 효과
      speed: 2000,
      fadeEffect: {
        crossFade: true,
      },
      autoplay : { 
        delay : 4500,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프(마우스로 드래그) 후 자동 재생이 비활성화 되지 않음
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


 //video slide
    var swiper = new Swiper(".videoSlide", {
      slidesPerView: 4,
      loop : true, 
      speed: 1500,
      autoplay : { 
        delay : 4000,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프(마우스로 드래그) 후 자동 재생이 비활성화 되지 않음
      }
    });

  
  //family site slide
    var swiper = new Swiper(".famsite", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      speed: 1500,
      autoplay: {
        delay : 2000,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프(마우스로 드래그) 후 자동 재생이 비활성화 되지 않음
      },
      autoplaySpeed: 1000,
      // 반응형
      // breakpoints: {
      //   400: {
      //     slidesPerView: 2,
      //     spaceBetween:5,
      //   },
      //   540: {
      //     slidesPerView: 3,
      //     spaceBetween:5,
      //   },
      //   640: {
      //     slidesPerView: 3,
      //     spaceBetween:5,
      //   },
      //   768: {
      //     slidesPerView: 4,
      //     spaceBetween: 8,
      //   },
      //   900: {
      //     slidesPerView: 5,
      //     spaceBetween: 8,
      //   },
      //   1230: {
      //     slidesPerView: 6,
      //     spaceBetween: 8,
      //   },
      //   1350: {
      //     slidesPerView: 7,
      //     spaceBetween: 8,
      //   },
      // }
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  
  $('.famsite-stop').on('click', function(){
    swiper.autoplay.stop();
    $('.famsite-stop').fadeOut();
    $('.famsite-play').fadeIn();
  });

  $('.famsite-play').on('click', function(){
    swiper.autoplay.start();
    $('.famsite-play').fadeOut();
    $('.famsite-stop').fadeIn();
  });





  // go top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });

  $("#top-btn").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });






  // mobile-menu
  var $ham = $(".mobile-ham");
  var $mnav = $("#mobile-nav");
  $ham.click(function () {

    $ham.toggleClass("mobile-ham-active");     

    if ($ham.hasClass("mobile-ham-active")) {
      //참의 실행자리
      $mnav.stop(true).animate({ top:'0px' },600,'swing');
      } else {
      //거짓의 실행자리
      $mnav.stop(true).animate({ top: '-550px' },1000, 'swing');
     }

  });

  /* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
  $("html").on("click", function(event){
    if($("nav").has(event.target).length == 0){
      $mnav.stop(true).animate({ top: '-550px' },1000, 'swing');

      if($ham.hasClass("mobile-ham-active")){
          $ham.removeClass("mobile-ham-active");
      };
    };
});


