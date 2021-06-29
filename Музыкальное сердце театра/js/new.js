$(document).ready(function () {

  // SLIDER INIT

$('.slider-news').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  speed: 250,
  mobileFirst: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 4000,
      settings: "unslick"
    },
  ]
});
})