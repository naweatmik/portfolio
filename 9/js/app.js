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
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
  },
});
