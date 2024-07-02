$(function () {

    // 햄버거바 
    $(".h_btn").click(function () {
        $(".h_menu").stop().animate({ right: '0' }, 1000);
    });

    $(".close").click(function () {
        $(".h_menu").stop().animate({ right: '-100%' }, 1000);
    });

    //

    // story

    // $(document).ready(function () {
    //     $('.ss_left').marquee({
    //         speed: 20, // 속도
    //         gap: 10, // 간격
    //         delayBeforeStart: -12000, // 시작 delay값
    //         direction: 'up', // 방향
    //         duplicated: true, // 선택 영역 복제
    //     });
    // });

    // $(document).ready(function () {
    //     $('.ss_right').marquee({
    //         speed: 20, // 속도
    //         gap: 10, // 간격
    //         delayBeforeStart: -15000, // 시작 delay값
    //         direction: 'down', // 방향
    //         duplicated: true, // 선택 영역 복제
    //     });

    // });

    // let roller = document.querySelector('.ss_top');
    // roller.id = 'roller1'; // 아이디 부여

    // let clone = roller.cloneNode(true)
    // // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
    // clone.id = 'roller2';
    // document.querySelector('.ss_top').appendChild(clone); // 하위 자식으로 부착

    // document.querySelector('#roller1').style.left = '0px';
    // document.querySelector('#roller2').style.left = document.querySelector('.ss_top').offsetWidth + 'px';
    // // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

    // roller.classList.add('original');
    // clone.classList.add('clone');

    //

    // contents
    $(".cicon_box>a").click(function () {
        if ($(this).attr("href") == "#") {
            return false;
        }
    });

    $('.cicon2>img').click(function () {
        $('.c_box1').css({ zIndex: '7' });
        $('.c_box2').css({ zIndex: '9' });
        $('.c_box3').css({ zIndex: '8' });
        $('.cicon3>img').attr('src', '../main/img/main1920/main_contents_icon3.svg')
        $('.cicon2>img').attr('src', '../main/img/main1920/main_contents_icon2_1.svg')
        $('.cicon1>img').attr('src', '../main/img/main1920/main_contents_icon1_1.svg')
    });

    $('.cicon3').click(function () {
        $('.c_box1').css({ zIndex: '8' });
        $('.c_box2').css({ zIndex: '7' });
        $('.c_box3').css({ zIndex: '9' });
        $('.cicon3>img').attr('src', '../main/img/main1920/main_contents_icon3_1.svg')
        $('.cicon2>img').attr('src', '../main/img/main1920/main_contents_icon2.svg')
        $('.cicon1>img').attr('src', '../main/img/main1920/main_contents_icon1_1.svg')
    });

    $('.cicon1').click(function () {
        $('.c_box1').css({ zIndex: '9' });
        $('.c_box2').css({ zIndex: '8' });
        $('.c_box3').css({ zIndex: '7' });
        $('.cicon3>img').attr('src', '../main/img/main1920/main_contents_icon3.svg')
        $('.cicon2>img').attr('src', '../main/img/main1920/main_contents_icon2.svg')
        $('.cicon1>img').attr('src', '../main/img/main1920/main_contents_icon1.svg')
    });


    //care



});

// contents ::before 변경하는법 



