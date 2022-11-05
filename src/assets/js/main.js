import React from 'react'


new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 32,
  autoplay: true,
  pagination: {
    type: "progressbar",
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

