let navbar = document.querySelector('.header .nav');
let searchbtn = document.querySelector('.header .search-form');
let login = document.querySelector('.header .login-form');
let infobox = document.querySelector('.header .header-info');

document.querySelector('#menu-responsive').onclick = () => {
    navbar.classList.toggle('active');
    searchbtn.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchbtn.classList.remove('active');
    login.classList.remove('active');
}

document.querySelector('#searchbtn').onclick = () => {
    searchbtn.classList.toggle('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
}

document.querySelector('.header #login-now').onclick = () => {
    login.classList.toggle('active');
    searchbtn.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('.header #infobtn').onclick = () => {
    infobox.classList.add('active');
    navbar.classList.remove('active');
    searchbtn.classList.remove('active');
    login.classList.remove('active');
}

document.querySelector('.header #header-info_cerrar').onclick = () => {
    infobox.classList.remove('active');
}


// slides 

var swiper = new Swiper(".slides-content", {
      loop:true,
      grabCursor:true,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // fin slides