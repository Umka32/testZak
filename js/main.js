//Mobile menu toogle

const navToogle = document.querySelector(".main-nav__toogle");
const mainNav = document.querySelector(".page-header__nav");

navToogle.addEventListener("click", function () {
  mainNav.classList.toggle("page-header__nav--closed");
  navToogle.classList.toggle("main-nav__toogle--opened");
});

//Slider Reviews

$(document).ready(function () {
  $('.slider__list').slick({
    autoplay: true,
    speed: 2000,
    dots: true,
    arrows: false,
    appendDots: $('.slider__list'),
    slidesToShow: 1,
  });
});

// Slider partners

$(document).ready(function () {
  $('.partners-slider__list').slick({
    autoplay: false,
    speed: 2000,
    dots: true,
    arrows: false,
    appendDots: $('.partners-slider__list'),
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

if (document.documentElement.clientWidth > 1199) {
  const menu = document.querySelector(".page-header__nav");
  menu.classList.remove("page-header__nav--closed");
  menu.classList.remove("page-header__nav--closed");
}

