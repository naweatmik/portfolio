//nav
function navClick(){
    const Nav = document.querySelector("nav");
    const Nactive = 'Nactive'
    Nav.classList.toggle(Nactive)
}

//button
function buttonClick(){
    const Sec3 = document.querySelector(".sec3_display");
    const Bplus = document.querySelector(".B_plus");
    const Bminus = document.querySelector(".B_minus");
    if(Sec3.style.display == 'none'){
        Sec3.style.display = 'block';
        Bminus.style.display = 'block'
        Bplus.style.display = 'none'
    }else{
        Sec3.style.display = 'none';
        Bminus.style.display = 'none'
        Bplus.style.display = 'block'
    }
}