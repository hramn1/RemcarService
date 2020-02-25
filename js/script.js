"use strict"
var swiperPhoto = new Swiper('.photo-gallery .swiper-container', {
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
var swiperPrice = new Swiper('.slide-wrap-page .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination--price',
      dynamicBullets: true,
    },
});
var swiperRemontShin = new Swiper('.slide-remontShin .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination--price',
      dynamicBullets: true,
    },
});
var swiperPokraska = new Swiper('.slide-pokraska .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination--price',
      dynamicBullets: true,
    },
});
var swiperDiski = new Swiper('.slide-diski .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination--price',
      dynamicBullets: true,
    },
});
// Меню
const dropDown = document.querySelectorAll('.dropdown-toggle');
const dropMenu = document.querySelectorAll('.dropdown-menu');
document.onclick = function f (evt) {
//   if(evt.target.classList.contains('dropdown-toggle')){
//   evt.target.classList.toggle('dropdown-toggle--open');
// }
  if (evt.target.classList.contains('dropdown-toggle') && !evt.target.nextElementSibling.classList.contains('dropdown-menu--open') ){
    evt.preventDefault();
    for (let i = 0; i < dropMenu.length; i++) {
      dropDown[i].classList.add('dropdown-toggle--open')
      if(dropMenu[i].classList.contains('dropdown-menu--open')){
        dropMenu[i].classList.remove('dropdown-menu--open');
      }
    }
    evt.target.nextElementSibling.classList.toggle('dropdown-menu--open');
  } else {
      for (let i = 0; i < dropMenu.length; i++) {
        dropDown[i].classList.remove('dropdown-toggle--open')
        if(dropMenu[i].classList.contains('dropdown-menu--open')){
          dropMenu[i].classList.remove('dropdown-menu--open')
      }
    }
  }
}
function check (evt) {

}
// for (let i = 0; i < dropDown.length; i++){
//   dropDown[i].onmouseleave = function g (evt) {
//   let timerId =  setTimeout(function () {
//       if(evt.target.nextElementSibling.classList.contains('dropdown-menu--open')){
//         evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
//       }
//     }, 500)
//     evt.target.nextElementSibling.onmouseleave = () => {
//       let timerId1 = setTimeout(function () {
//        evt.target.nextElementSibling.classList.remove('dropdown-menu--open');
//      }, 500)
//      dropDown[i].onmouseenter = function () {
//        clearTimeout(timerId1);
//
//      }
//      evt.target.nextElementSibling.onmouseenter = function () {
//        clearTimeout(timerId1);
//      }
//     }
//
//     dropDown[i].onmouseenter = function () {
//       clearTimeout(timerId);
//
//     }
//     evt.target.nextElementSibling.onmouseenter = function () {
//       clearTimeout(timerId);
//     }
//   }
// }
// Мобильное меню
let mobilMenu = {
  btnNav: document.querySelector('.btn--nav'),
  menuList: document.querySelector('.main-menu'),
  menuStartHeight: () => {
    document.querySelector('.main-menu').style.visibility = 'hidden';

    document.querySelector('.main-menu').style.display = 'flex';
    document.querySelector('.main-menu').style.height = 'auto';
    const height = document.querySelector('.main-menu').offsetHeight;
    document.querySelector('.main-menu').style.display = 'none';
    return height;
  },
  menuHeight: function () {
    return mobilMenu.menuList.offsetHeight;
  },
  checkMenu: function () {
    if (mobilMenu.btnNav.classList.contains('collapsed') && window.matchMedia('(max-width: 767px)').matches){
      mobilMenu.menuList.style.display = "none";
    }
    else if (window.matchMedia('(max-width: 1025px)').matches) {
      mobilMenu.menuList.style.display = "flex";
    }
    else {
      mobilMenu.menuList.style.display = "flex";
    }
  },
  showMenu: (mh) => {
    mobilMenu.btnNav.classList.remove('collapsed');
    mobilMenu.menuList.style.display = "flex";
    document.querySelector('.main-menu').style.visibility = 'visible';
    mobilMenu.menuList.style.height = 0;
    let h = 0;
    let animationMenu = setInterval(function () {
      h+=30;
      mobilMenu.menuList.style.height = h + 'px';
      if (h >= mh) {
        clearTimeout(animationMenu)
      }
    },30)
  },
  collapseMenu: () => {
    mobilMenu.btnNav.classList.add('collapsed');
    let mh =  mobilMenu.menuList.offsetHeight;
    let animationMenu = setInterval(function(){
      mh -=40;
      mobilMenu.menuList.style.height = mh + 'px';
      if (mh <= 0 ){
        clearTimeout(animationMenu)
        mobilMenu.menuList.style.display = 'none';

      }
    },30)
  },
  toggleMenu: () => {
    if(mobilMenu.btnNav.classList.contains('collapsed')){
      mobilMenu.showMenu(mobilMenu.menuStartHeight());
      mobilMenu.btnNav.classList.add('btn--close');
    } else {
      mobilMenu.collapseMenu();
    mobilMenu.btnNav.classList.remove('btn--close');
    }
  },
}
mobilMenu.checkMenu();
window.addEventListener("resize", mobilMenu.checkMenu);
mobilMenu.btnNav.addEventListener('click',mobilMenu.toggleMenu);

// Аккордеон
const btnAcc = document.querySelectorAll('.btn-colapse');
const collapseBlock = document.querySelectorAll('.colapse');
function accStartHeight (block) {
  block.style.visibility = 'hidden';
  block.style.display = 'block';
  block.style.height = 'auto';
  const height = block.offsetHeight;
  block.style.display = 'none';
  accShow(height, block);
  //return height;
}
function accShow(mh, block) {
  block.style.display = 'block';
  block.style.visibility = 'visible';
  block.style.height = 0;
  let h = 0;
  requestAnimationFrame(function dd() {
    h+=40;
    block.style.height = h + 'px';
    if (h < mh ) {
      requestAnimationFrame(dd)
    }
  })
}
function collapseAcc(block) {
    let mh =  block.offsetHeight;
    requestAnimationFrame(function zz(){
      mh -=40;
      block.style.height = mh + 'px';
      if (mh > 0 ){
        requestAnimationFrame(zz)
      } else if (mh <= 0 ) {
        block.style.display = 'none';
        block.style.visibility = 'hidden';
      }
    })
  }
for (let i = 0; i < btnAcc.length; i++) {
    btnAcc[i].addEventListener('click',function(evt) {
      btnAcc[i].classList.toggle('btn-colapse--show');

      if(btnAcc[i].dataset.target == collapseBlock[i].id){
        collapseBlock[i].classList.toggle('colapse--show');
        if(btnAcc[i].classList.contains('btn-colapse--show')){
          accStartHeight(collapseBlock[i]);
        }
        else {
          collapseAcc(collapseBlock[i])
        }
      }
    })
  }
