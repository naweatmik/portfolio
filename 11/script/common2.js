document.addEventListener('DOMContentLoaded', () => {

    // btn_lan
    let btn_lan = document.querySelector(".btn_lan");
    let btn_ko = document.querySelector(".btn_ko");
    let btn_en = document.querySelector(".btn_en");

    btn_lan.addEventListener('mouseenter', () => {            
        btn_ko.style.opacity = "0";
        btn_en.style.opacity = "1";
    });
    btn_lan.addEventListener('mouseleave', () => {            
        btn_ko.style.opacity = "1";
        btn_en.style.opacity = "0";
    });
    // btn_lan

    // ham
    let ham = document.querySelector(".ham");
    let nav = document.querySelector("nav");
    let nav_ham = document.querySelector(".nav_ham");
    let header = document.querySelector("header");

    ham.addEventListener('click', () => {
        nav.style.display = "block";
        header.style.display = "none";
        nav_ham.classList.add("close");
    });
    nav_ham.addEventListener('click', () => {
        nav.style.display = "none";
        header.style.display = "block";
        ham.classList.add("open");
    });
    // ham
    
    // cursor
    const cursor = document.querySelectorAll('.cursor');
    window.addEventListener('mousemove', (e) => {
        e.preventDefault();
        let x = e.pageX;
        let y = e.pageY;

        cursor.forEach(el => {
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
        });
    });
    // cursor

    // circle_move
    let media = gsap.matchMedia();

    media.add("(min-width:767px)", () => {
        TweenMax.to(".cir1", 8, {
            motionPath:{
                type:"soft",
                curviness:1.25,
                autoRotate:false,
                path:[
                    {x:-20, y:40},
                    {x:-10, y:50},
                    {x:10, y:60},
                    {x:20, y:50},
                    {x:30, y:40}
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir2", 7, {
            motionPath:{
                type:"soft",
                autoRotate:false,
                path:[
                    {x:0, y:30},
                    {x:30, y:40},
                    {x:40, y:20},
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir3", 10, {
            motionPath:{
                type:"soft",
                autoRotate:false,
                path:[
                    {x:-85, y:-85},
                    {x:15, y:-120}	
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir4", 10, {
            motionPath:{
                type:"soft",
                curviness:1.25,
                autoRotate:false,
                path:[
                    {x:-120, y:80},
                    {x:-30, y:80},
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir5", 8, {
            motionPath:{
                type:"soft",
                curviness:1.25,
                autoRotate:false,
                path:[
                    {x:0, y:-45},
                    {x:-50, y:-30},
                    {x:-40, y:0},
                    {x:-30, y:10},
                    {x:-20, y:10}
                ]
            },
            ease:Linear.easeNone,
            repeat:-1,
            yoyo:true
        });
    });
    media.add("(max-width:766px)", () => {
        TweenMax.to(".cir1", 10, {
            motionPath:{
                type:"soft",
                curviness:1.25,
                autoRotate:false,
                path:[
                    {x:-20, y:20},
                    {x:-10, y:30},
                    {x:10, y:40},
                    {x:20, y:30},
                    {x:30, y:20}
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir2", 10, {
            motionPath:{
                type:"soft",
                autoRotate:false,
                path:[
                    {x:0, y:20},
                    {x:30, y:30},
                    {x:40, y:10},
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir3", 10, {
            motionPath:{
                type:"soft",
                autoRotate:false,
                path:[
                    {x:-25, y:-25},
                    {x:15, y:-60}	
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir4", 10, {
            motionPath:{
                type:"soft",
                curviness:1.25,
                autoRotate:false,
                path:[
                    {x:-50, y:40},
                    {x:-20, y:70},
                ]
            },
            ease:Power1.easeInOut,
            repeat:-1,
            yoyo:true
        });
        TweenMax.to(".cir5", 12, {
            motionPath:{
                type:"soft",
                curviness:1.25,
                autoRotate:false,
                path:[
                    {x:0, y:-25},
                    {x:-40, y:-10},
                    {x:-30, y:0},
                    {x:-20, y:5},
                    {x:-10, y:5}
                ]
            },
            ease:Linear.easeNone,
            repeat:-1,
            yoyo:true
        });
    });
    // circle_move

    // text
    let ta = gsap.timeline({
        scrollTrigger: {
          trigger: ".s2_txt",
          toggleActions: "restart none none none",
          start:"top 50%"
        }
    });
    ta.to(".text_ani", {y: '0%', duration: 1, stagger: 0.2});
    // text

});