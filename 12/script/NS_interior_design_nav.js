$(function(){

    let open = document.querySelector(".open");
    console.log(open)
    let close = document.querySelector(".close");
    console.log(close)
    let nav = document.querySelector(".inner");
    console.log(nav)
    let header = document.querySelector("header")
    console.log(header)

    open.addEventListener('click', () => {
        nav.style.display = "block"
        header.style.opacity= "0"
    });

    close.addEventListener('click', () => {
        header.style.opacity = "100"
        nav.style.display = "none"
    });
    


})