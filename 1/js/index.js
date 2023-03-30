
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
  start: 'top -980',
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

gsap.set('.stick', {xPercent:-50});

var rotate = gsap.timeline({
  scrollTrigger:{
    trigger: ".back",
    scrub:0.2,
    start: 'top top',
    end:'+=20000',
  }
})
.to('.stick', {
  duration:1, ease:'none',
  top:3000
})




const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section1",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=2000",
    toggleActions: "play pause play reset"
  }
});

tl.from(".s1_title", {
  opacity: 0,
  duration: 1
}).from(
  ".s1_slide",
  {
    opacity: 0,
    duration: 1,
    x:100
  });


const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      pin: true,
      scrub: 1,
      start: "center center",
      end: "+=2000",
      toggleActions: "play pause play reset"
    }
  });

  t2.from(
    ".select_img>.right_top>img,.select_text>p",
    {
      scale: 0,
      opacity: 0,
      duration: 0.1
    }).from(
      ".select_img>.left_top>img",
      {
        scale: 0,
        opacity: 0,
        duration: 0.1
      }).from(
        ".select_img>.left_bottom>img",
        {
          scale: 0,
          opacity: 0,
          duration: 0.1
        })
    

        const t3 = gsap.timeline({
          scrollTrigger: {
            trigger: "#section3",
            pin: true,
            scrub: 1,
            start: "top 100",
            end: "+=2000",
            toggleActions: "play pause play reset"
          }
        });
        
        t3.from(".s3_title", {
          opacity: 0,
          duration: 10
        }).from(".box:nth-child(1)", {
          opacity:0,
          y:-200,
          duration:10,
          delay:0.25
        }).from(".box:nth-child(2)", {
          opacity:0,
          y:200,
          duration:10,
          scrub:5,
          delay:0.5
        }).from(".box:nth-child(3)", {
          opacity:0,
          y:-200,
          duration:10,
          scrub:5,
          delay:0.75
        }).from(".box:nth-child(4)", {
          opacity:0,
          y:200,
          duration:10,
          scrub:5,
          delay:1
        })

        


/*section2*/

// gsap.registerPlugin(ScrollTrigger);
// gsap.to('.right_top img',{
//   scrollTrigger: {
//     trigger:".right_top img",
//     markers:'true',
//     start: "top bottom", end: "bottom top",
//     toggleActions:"restart resart restart pause"
//   },
//   x: -620,
//   rotation:360,
//   duration:2.5,
//   once: true,
// });

// gsap.to('.left_top img',{
//   scrollTrigger: {
//     trigger:".left_top img",
//     markers:'true',
//     start: "top bottom", end: "bottom top",
//     toggleActions:"restart resart restart pause"
//   },
//   x: 250,
//   rotation:360,
//   duration:2.5,
//   once: true,
// });

// gsap.to('.left_bottom img',{
//   scrollTrigger: {
//     trigger:".left_bottom img",
//     markers:'true',
//     start: "top bottom", end: "bottom top",
//     toggleActions:"restart resart restart pause"
//   },
//   x: 550,
//   rotation:360,
//   duration:2.5,
//   once: true,
// });
/*section3*/