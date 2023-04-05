// const toggleBtn = document.querySelector('.navbar_toggleBtn');
// const menu = document.querySelector('.navbar_menu');
// const icons = document.querySelector('.navbar_icons');

// console.log('로그테스트', toggleBtn, menu, icons);
// toggleBtn.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   icons.classList.toggle('active');
// });




window.addEventListener('load', () => {
    const toggleBtn = window.document.querySelector('.navbar_toggleBtn');
    const menu = window.document.querySelector('.navbar_menu');
    const icons = window.document.querySelector('.navbar_icons');
  
    console.log('to', toggleBtn)
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      icons.classList.toggle('active');
    });  
  })