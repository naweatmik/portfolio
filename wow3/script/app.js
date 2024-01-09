


// 마우스커서

const mainBall = document.querySelector(".circle--1");
const followBall = document.querySelector(".circle--2");

const lerp = (from, to, ease) => (1 - ease) * from + ease * to;

let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;

let mainCircle = {
  lastX: currentX,
  lastY: currentY,
  size: mainBall.getBoundingClientRect(),
};

let followCircle = {
  lastX: currentX,
  lastY: currentY,
  size: followBall.getBoundingClientRect(),
}

window.addEventListener("mousemove", e => {
  currentX = e.pageX+20;
  currentY = e.pageY+20;
});

const circleMovement = (circle, ease, direction) => {
    if (direction === 'x') {
        return lerp(circle.lastX, currentX, ease);
    }
    return lerp(circle.lastY, currentY, ease);
}


const render = () => {
  mainCircle.lastX = circleMovement(mainCircle, 0.2, 'x');
  mainCircle.lastY = circleMovement(mainCircle, 0.2, 'y');
  mainBall.style.transform = `translate(${mainCircle.lastX - mainCircle.size.width / 2 }px, ${mainCircle.lastY - mainCircle.size.height / 2}px)`;
  
    
  followCircle.lastX = circleMovement(followCircle, 0.1, 'x');
  followCircle.lastY = circleMovement(followCircle, 0.1, 'y');
  followBall.style.transform = `translate(${followCircle.lastX - followCircle.size.width / 2 }px, ${followCircle.lastY - followCircle.size.height / 2 }px)`;
  requestAnimationFrame(render);
};

//setInterval(() => render(), 500);
render();



//타이포 효과
new TypeIt(".thx", {
    speed: 50,
    waitUntilVisible: true,
}).go();


// fade down 효과
AOS.init({
  duration: 1000,
});


var scrollToTopButtonContainer = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function() {
  // If the scroll position is 100 pixels or more, show the button; otherwise, hide it
  if (window.scrollY >= 600) {
    scrollToTopButtonContainer.style.display = "block";
  } else {
    scrollToTopButtonContainer.style.display = "none";
  }
});

function scrollToTop() {
  // Scroll to the top of the page with smooth behavior
  window.scrollTo({ top: 0, behavior: "smooth" ,duration: 2000 });
}