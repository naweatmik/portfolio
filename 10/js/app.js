let hambtn = document.querySelector(".home");
let hammenu = document.querySelector(".hammenu");
let hamcbtn = document.querySelector(".closee");

hambtn.addEventListener("click", () => {
  hammenu.classList.add("hameopen");
});

hamcbtn.addEventListener("click", () => {
  hammenu.classList.remove("hameopen");
});

let scrollbtn = document.querySelector(".topbtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
});

scrollbtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: "2",
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    500: {
      spaceBetween: 0,
      slidesPerView: "2",
    },
    767: {
      spaceBetween: 150,
      slidesPerView: "auto",
    },
  },
});
