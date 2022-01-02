let catBtn = document.getElementsByClassName("dropCat");

let isOpen = false;

const popOpen = () => {
  let popUp = document.getElementById("popCatDiv");
  if (!isOpen) {
    popUp.style.display = "flex";
  } else if (isOpen) {
    popUp.style.display = "none";
  }
  isOpen = !isOpen;
};

//swipper

const swiper = new Swiper('.swiper', {
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 5
    },
    720:{
      slidesPerView: 8,
      spaceBetween: 5
      
    }
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let preLoaderScreen = document.querySelector(".bgScreen");
const preLoader = () => {
	preLoaderScreen.style.display = "none"
};
document.addEventListener(onload, void(preLoaderScreen.style.display = "none"));