"use strict"
var swiperPhoto = new Swiper('.swiper-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});
var swiperPrice = new Swiper('.price-service.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Меню
const dropDown = document.querySelectorAll('.dropdown-toggle');
const dropMenu = document.querySelectorAll('.dropdown-menu');
document.onclick = function f (evt) {
  if (evt.target.classList.contains('dropdown-toggle') && !evt.target.nextElementSibling.classList.contains('dropdown-menu--open') ){
    evt.preventDefault();
    for (let i = 0; i < dropMenu.length; i++) {
      if(dropMenu[i].classList.contains('dropdown-menu--open')){
        dropMenu[i].classList.remove('dropdown-menu--open');
      }
    }
    evt.target.nextElementSibling.classList.toggle('dropdown-menu--open');

  } else {
      for (let i = 0; i < dropMenu.length; i++) {
        if(dropMenu[i].classList.contains('dropdown-menu--open')){
          dropMenu[i].classList.remove('dropdown-menu--open')
      }
    }
  }
}
for (let i = 0; i < dropDown.length; i++){
  dropDown[i].onmouseleave = function g (evt) {
  let timerId =  setTimeout(function () {
      if(evt.target.nextElementSibling.classList.contains('dropdown-menu--open')){
        evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
      }
    }, 500)
    evt.target.nextElementSibling.onmouseleave = () => {
      let timerId1 = setTimeout(function () {
       evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
     }, 500)
     dropDown[i].onmouseenter = function () {
       clearTimeout(timerId1);

     }
     evt.target.nextElementSibling.onmouseenter = function () {
       clearTimeout(timerId1);
     }
    }

    dropDown[i].onmouseenter = function () {
      clearTimeout(timerId);

    }
    evt.target.nextElementSibling.onmouseenter = function () {
      clearTimeout(timerId);
    }
  }
}
