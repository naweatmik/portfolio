document.addEventListener("DOMContentLoaded", () => {

  let Mswiper = new Swiper(".mSwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
  });




  let kswiper = new Swiper(".kSwiper", {
    slidesPerView:2,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      575: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      400:{
        slidesPerView: 3,
        spaceBetween: 220,
      }
      // when window width is >= 480px
 
    }
  });


  let hamBtn = document.querySelector(".ham");
  let closeBtn = document.querySelector(".closse");
  let nav = document.querySelector("nav")
  let body = document.querySelector("body")

  hamBtn.addEventListener("click",()=>{
    nav.style.display="flex";
    body.style.overflow="hidden";
  });

  closeBtn.addEventListener("click",()=>{
    nav.style.display="none";
    body.style.overflow="visible";
  });


});