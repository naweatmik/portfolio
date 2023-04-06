
const showAnim = gsap.from('.main-tool-bar', { 
  yPercent: -100,
  paused:true,
  duration: 0.2,
  
}).progress(1);


ScrollTrigger.create({
  start: "top top-=" + 300,
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});

ScrollTrigger.create({
  start: 'top -100',
  end: 99999,
  toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
});

$(function() {
  $('.btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

AOS.init({
  duration: 600
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





