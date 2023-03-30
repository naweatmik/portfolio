
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



gsap.registerPlugin(ScrollTrigger);

gsap.from(".boxx:nth-child(1)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:".boxx:nth-child(1)",
  scrub:5
});

gsap.from(".boxx:nth-child(3)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:".boxx:nth-child(3)",
  delay: 0.25,
  scrub:5
})

gsap.from(".boxx:nth-child(2)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:".boxx:nth-child(2)",
  delay: 0.75,
  scrub:5
})

gsap.from(".boxx:nth-child(4)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:".boxx:nth-child(4)",
  delay: 0.5,
  scrub:5
})

gsap.from(".boxx:nth-child(5)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:{
    trigger:".boxx:nth-child(5)",
    start:"bottom 400",
    end:"bottom 400",
    toggleActions: "play none none reverse"
  }
})

gsap.from(".boxx:nth-child(7)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:{
    trigger:".boxx:nth-child(7)",
    start:"bottom 400",
    end:"bottom 400",
    toggleActions: "play none none reverse"
  }
})

gsap.from(".boxx:nth-child(8)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:{
    trigger:".boxx:nth-child(8)",
    start:"bottom 400",
    end:"bottom 400",
    toggleActions: "play none none reverse"
  }
})

gsap.from(".boxx:nth-child(6)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:{
    trigger:".boxx:nth-child(6)",
    start:"bottom 400",
    end:"bottom 400",
    scrub:5,
    toggleActions: "play none none reverse"
  }
})

gsap.from(".boxx:nth-child(10)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:{
    trigger:".boxx:nth-child(10)",
    start:"bottom 400",
    end:"bottom 400",
    toggleActions: "play none none reverse"
  }
})

gsap.from(".boxx:nth-child(9)",{
  opacity:0,
  x:-400,
  y:-400,
  duration:1,
  scrollTrigger:{
    trigger:".boxx:nth-child(9)",
    start:"bottom 400",
    end:"bottom 400",
    scrub:6,
    toggleActions: "play none none reverse"
  }
})



// t1.from(".box:nth-child(1)", {
//   top:-200,
//   opacity:0,
// duration: 2.5
// }).from(".box:nth-child(2)", {
//   top:1000,
//   opacity:0,
// duration: 2.5
// }).from(".box:nth-child(3)", {
//   top:-200,
//   opacity:0,
// duration: 2.5
// }).from(".box:nth-child(4)", {
//   top:1000,
//   opacity:0,
// duration: 2.5
// })


