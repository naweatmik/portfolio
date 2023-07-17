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
});