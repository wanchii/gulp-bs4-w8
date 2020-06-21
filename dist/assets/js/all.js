"use strict";

$(document).ready(function () {
  console.log('Hello Bootstrap4');
}); // var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     nextEl: '.swiper-btn-next',
//     prevEl: '.swiper-btn-prev',
//   },
// });

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
