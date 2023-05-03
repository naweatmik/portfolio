// first page cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});


// scroll
gsap.registerPlugin(ScrollTrigger);

// second page horizontal scroll
let sections = gsap.utils.toArray(".box");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#second-page",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector("#second-page").offsetWidth
    }
});

// second page box 3
window.onload = () => {
    let sliderImagesBox = document.querySelectorAll(".cards-wrapper");
    sliderImagesBox.forEach((el) => {
        let imageNodes = el.querySelectorAll(".card1:not(.hidden)");
        let arrIndexes = []; // Index array
        (() => {
            // The loop that added values to the arrIndexes array for the first time
            let start = 0;
            while (imageNodes.length > start) {
                arrIndexes.push(start++);
            }
        })();

        let setIndex = (arr) => {
            for (let i = 0; i < imageNodes.length; i++) {
                imageNodes[i].dataset.slide = arr[i]; // Set indexes
            }
        };
        el.addEventListener("click", () => {
            arrIndexes.unshift(arrIndexes.pop());
            setIndex(arrIndexes);
        });
        setIndex(arrIndexes); // The first indexes addition
    });
};

// second transition 
gsap.set('.movingball', { xPercent: -50, yPercent: -50 })

let timeline = gsap.timeline({

    scrollTrigger: {
        trigger: "#transition2",
        pin: true,
        start: "center center",
        end: "+=150%",
        scrub: 1,
        markers: false,
    },
    defaults: { duration: 1.5, ease: 'none' }
});
timeline.from('.movingball', { xPercent: -180 })
timeline.to('.movingball', { width: '100%', height: '100%', borderRadius: '0%' }, '+=1')
timeline.to({}, { duration: 1 })


// switch on third page
gsap.registerPlugin(Flip);

const circles = gsap.utils.toArray(".skill-wrap");
const button = document.querySelector("input");
const wrapper = document.querySelector(".skills-v1");
const tvw = document.querySelector(".thirdpage");

button.addEventListener("click", () => {
    const state = Flip.getState(".skills-v1, .skill-wrap");
    wrapper.classList.toggle("skills-v2");
    tvw.classList.toggle("thirdpagev2")
    Flip.from(state, {
        absolute: true,
        duration: 0.5,
        stagger: -0.0125,
        ease: "sine"
    });
});


// last page background particles
let stars = document.querySelector('#particles');
let ctx = stars.getContext('2d');
stars.width = window.innerWidth;
stars.height = window.innerHeight;
let mouse = {
    x: undefined,
    y: undefined
}
let colors = ['#fff', '#f5f5f5', '#dedede'];
let maxRadius = 15;


window.addEventListener('resize', function () {
    stars.width = window.innerWidth;
    stars.height = window.innerHeight;

    init();
})

window.addEventListener('mousemove', function (e) {
    mouse.x = event.x;
    mouse.y = event.y;
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = colors[Math.floor(Math.random() * colors.length)]

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

let circleArray = [];

function init() {
    circleArray = [];

    for (let i = 0; i < 50; i++) {
        let radius = Math.random() * 2 + 1;
        let x = Math.random() * (innerWidth - radius * 0.25) + radius;
        let y = Math.random() * (innerHeight - radius * 0.25) + radius;
        let dx = (Math.random() - 0.5) * 1;
        let dy = (Math.random() - 0.5) * 1;

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

init();

function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();

// scroll to top
const stop = document.querySelector('.scroll-top');

stop.addEventListener('click', function () {
    gsap.to(window, 1.5, {
        scrollTo: 0
    });
})
