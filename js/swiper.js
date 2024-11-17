var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
      scale: 0.85,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
      320: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2.2,
      },
      1280: {
          slidesPerView: 3,
      },
  },
});