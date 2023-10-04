$(function () {
    //새로고침 시 상단
    history.scrollRestoration = "manual"

    // cursor
    const circle = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        circle.style.left = cursorX + 'px';
        circle.style.top = cursorY + 'px';
    });

    // mouseover
    $('a').hover(function () {
        $('.cursor').addClass('on');
    }, function () {
        $('.cursor').removeClass('on');
    });
    $('button').hover(function () {
        $('.cursor').addClass('on');
    }, function () {
        $('.cursor').removeClass('on');
    });

    // intro
    const intro = gsap.timeline({ default: { ease: "power1.out" } });

    intro.to(".slider", { y: "-100vh", duration: 1.5, delay: 3 })
        .to("#intro", { y: "-100vh", duration: 1 }, "-=1"); // slider보다 -1초 먼저 슬라이드 올라감

    // intro typing
    const text = document.querySelector(".second_txt");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "my space!";
        }, 0);
        setTimeout(() => {
            text.textContent = "my portfolio!";
        }, 4000);
    }

    textLoad();
    setInterval(textLoad, 8000);

    // nav
    const Nsec1 = document.querySelector('.nav_ul li:nth-child(1) a');
    const Nsec2 = document.querySelector('.nav_ul li:nth-child(2) a');
    const Nsec3 = document.querySelector('.nav_ul li:nth-child(3) a');
    const Nclose = document.querySelector('nav');
    const Nactive = 'Nactive'
    Nsec1.addEventListener("click", (event) => {
        Nclose.classList.toggle(Nactive)
    })
    Nsec2.addEventListener("click", (event) => {
        Nclose.classList.toggle(Nactive)
    })
    Nsec3.addEventListener("click", (event) => {
        Nclose.classList.toggle(Nactive)
    })

    // header
    let _Scroll = 0;
    $(window).scroll(function () {
        let nowScroll = $(this).scrollTop();
        if (scrollY > 100) {
            $("header").css("background", "rgba(0, 0, 0, 0.9)");
        } else {
            $("header").css("background", "transparent");
        }

        if (_Scroll >= nowScroll || _Scroll < 0) {
            $('header').removeClass('scrolldown');
        } else {
            $('header').addClass('scrolldown');
        };
        _Scroll = nowScroll;
    });

    //scrolltrigger
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
        "all": function () {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.sec1',
                    start: 'top 100%',
                    end: 'top 70%',
                    // markers: true,
                }
            })
            tl.fromTo('.sec1 .container .about .name', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
            })
            tl.fromTo('.sec1 .container .about .introduce p', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                delay: 0.1
            })
            tl.fromTo('.sec1 .container .about .click', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                delay: 0.2
            })

            const content = document.querySelectorAll('.sec3 .container .sec3_content_warp .sec3_Jcontent')
            let tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.sec3',
                    start: '10% 100%',
                    end: '70% top',
                    // markers: true,
                }
            })
            tl3.fromTo('.sec3 .container .sec_title', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                duration: 0.4
            })
            content.forEach((Content, index) => {
                tl3.fromTo(Content, {
                    opacity: 0,
                    y: '100%',
                }, {
                    opacity: 1,
                    y: 0,
                    delay: 0.1,
                })
            })
            tl3.fromTo('.sec3 .container .click', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                delay: 0.2,
                duration: 0.2
            })

            let tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.sec4',
                    start: '50% 100%',
                    end: 'bottom top',
                    // markers: true,
                }
            })
            tl4.fromTo('.sec4 .container .sec4_txt_warp .sec4_tbox .sec_title', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0
            })
            tl4.fromTo('.sec4 .container .sec4_txt_warp .contact_inner', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                delay: 0.1
            })
            tl4.fromTo('.sec4 .container .copy', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                delay: 0.2
            })
        },

        "(min-width: 691px)": function () {
            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.sec2',
                    start: '10% 100%',
                    end: '50% top',
                    // markers: true,
                }
            })
            tl2.fromTo('.sec2 .container .sec_title', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5
            })
            tl2.from('.sec2 .sec2_img1', {
                transform: 'translateX(10%)',
                delay: 0.05,
                duration: 0.3,
                opacity: 0
            })
            tl2.from('.sec2 .sec2_img2', {
                transform: 'translateX(-10%)',
                delay: 0.1,
                duration: 0.3,
                opacity: 0
            })
            tl2.fromTo('.sec2 .container .flow_warp .flow_content', {
                opacity: 0,
                y: '10%',
                stagger: {
                    amount: 1
                }
            }, {
                opacity: 1,
                y: 0,
                stagger: {
                    amount: 1
                },
                delay: 0.15,
                duration: 0.3
            })
        },

        "(max-width: 690px)": function () {
            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.sec2',
                    start: '10% 100%',
                    end: '50% top',
                    // markers: true,
                }
            })
            tl2.fromTo('.sec2 .container .sec_title', {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5
            })
            tl2.fromTo('.sec2 .container .flow_warp .flow_content', {
                opacity: 0,
                y: '10%',
                stagger: {
                    amount: 1
                }
            }, {
                opacity: 1,
                y: 0,
                stagger: {
                    amount: 1
                },
                delay: 0.1,
                duration: 0.3
            })
        }
    });
});
