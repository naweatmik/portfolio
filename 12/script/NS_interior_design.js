$(function(){

  $('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '40px',
      //     slidesToShow: 3
      //   }
      // },
       {
        breakpoint: 1023,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

})
