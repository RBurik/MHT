$(document).ready(function () {

    // NAVIGATION
  $('aside button').on("click", function() {

    for(var i = 0; i < $('aside button').length; i++) {
      $('aside button').eq(i).removeClass('active');
    }
    $(this).addClass('active');

    let $buttonIndex = $(this).index();

    for(var i = 0; i < $('.nav-content').length; i++) {
      $('.nav-content').eq(i).removeClass('active');
    }
    $('.nav-content').eq($buttonIndex).addClass('active');
  })

    // SLIDER INIT

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true,
    infinite: false,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
  });
})