$(document).ready(function () {

    // SLIDER INIT
    
  $('.sliderMain-heading').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 400,
    mobileFirst: true,
    infinite: true,
    centerMode: true, 
    centerPadding: '15rem',
    asNavFor: '.sliderMain-content, .sliderMain-nav',
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
    ]
  });

  $('.sliderMain-content').slick({
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 400,
    mobileFirst: true,
    infinite: true,
    fade: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
    ]
  });

  $('.sliderMain-nav').slick({
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    speed: 400,
    mobileFirst: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
    ]
  });

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

  $('.slickArrow.slickNext').on("click", function() {
    $('.sliderMain-heading').slick('slickNext');
    $('.sliderMain-content').slick('slickNext');
    $('.sliderMain-nav').slick('slickNext');
  })

  $('.slickArrow.slickPrev').on("click", function() {
    $('.sliderMain-heading').slick('slickPrev');
    $('.sliderMain-content').slick('slickPrev');
    $('.sliderMain-nav').slick('slickPrev');
  })

    // POSTER FILTER
    
  // Start Value
  for (let i = 0; i < $('.section-posters .filter-result').length; i++) {
    $('.section-posters .filter-result').eq(i).css('display', 'none');
  }
  $('.filter-result').eq(0).css('display', 'block');

  $('.section-posters .tag').on("click", function() {
    var $tagIndex = $(this).index();

    // Tag CSS
    for (let i = 0; i < $('.section-posters .tag').length; i++) {
      $('.section-posters .tag').eq(i).removeClass('tag-active');
    }
    $(this).addClass('tag-active');

    // Tag JS
    for (let i = 0; i < $('.section-posters .filter-result').length; i++) {
      $('.section-posters .filter-result').eq(i).css('display', 'none');
    }
    $('.filter-result').eq($tagIndex).css('display', 'block');
  })

    // ПЕРЕНОС ДАННЫХ

  $('.sliderMain-heading a').on("click", function() {
    sessionStorage.setItem('index', $(this).attr('data-index'));
  })

})