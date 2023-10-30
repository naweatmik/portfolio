$(function(){
$('.slide').slick({
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 1220,
      settings: {
        arrows: false,
        slidesToShow:3
      }
    },
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
  ],
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});  


})
