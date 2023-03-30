
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

gsap.from(".box:nth-child(1)",{
  opacity:0,
  y:-200,
  duration:1,
  scrollTrigger:".box:nth-child(1)",
  scrub:5
});

gsap.from(".box:nth-child(2)",{
  opacity:0,
  y:200,
  duration:1,
  scrollTrigger:".box:nth-child(1)",
  scrub:5,
  delay:0.5
});

gsap.from(".box:nth-child(3)",{
  opacity:0,
  y:-200,
  duration:1,
  scrollTrigger:".box:nth-child(3)",
  scrub:5,
  delay:0.25
});

gsap.from(".box:nth-child(4)",{
  opacity:0,
  y:200,
  duration:1,
  scrollTrigger:".box:nth-child(4)",
  scrub:5,
  delay:0.75
});


// const t1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#section3",
//     pin: true,
//     scrub: 1,
//     start: "top 100",
//     end: "+=2000",
//     toggleActions: "play pause play reset"
//   }
// });

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

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#company",
    pin: true,
    scrub: 1,
    start: "top 50",
    end: "+=4000",
    toggleActions: "play pause play reset"
  }
});


/*
 tl.from(".cleft", {
      width: 0,
      opacity:0,
    duration: 1
    }).from(".cright", {
     width: 0,
     opacity:0,
   duration: 1
   })
*/



tl.from(".b1>.cb:nth-child(1)", {
  width: 0,
  opacity:0,
duration: 2.5
}).from(".b1>.cb:nth-child(2)", {
  width: 0,
  opacity:0,
duration: 2.5
}).from(".b2>.cb:nth-child(1)", {
  width: 0,
  opacity:0,
duration: 2.5
}).from(".b2>.cb:nth-child(2)", {
  width: 0,
  opacity:0,
duration: 2.5
}).from(".b3>.cb:nth-child(1)", {
  width: 0,
  opacity:0,
duration: 2.5
}).from(".b3>.cb:nth-child(2)", {
  width: 0,
  opacity:0,
duration: 2.5
}).from(".b4>.cb:nth-child(1)", {
  width: 0,
  opacity:0,
duration: 2.5
}).from(".b4>.cb:nth-child(2)", {
  width: 0,
  opacity:0,
duration: 2.5
})


