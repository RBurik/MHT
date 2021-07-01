$(document).ready(function () {

  // NAVIGATION
$('aside button').on("click", function() {

  for(var i = 0; i < $('aside button').length; i++) {
    $('aside button').eq(i).removeClass('active');
  }
  $(this).addClass('active');

  let $buttonIndex = $(this).index();

  for(var i = 0; i < $('.nav-content').length; i++) {
    $('.nav-content').eq(i).addClass('hidden');
  }
  $('.nav-content').eq($buttonIndex).removeClass('hidden');
})

  // NOMINEES FILTER

// Start Value
for (let i = 0; i < $('.nominees .filter-result').length; i++) {
  $('.nominees .filter-result').eq(i).css('display', 'none');
}
$('.nominees .filter-result').eq(0).css('display', 'flex');

$('.nominees .filter .text').on("click", function() {
  $(this).next().slideToggle(150);
  $(this).toggleClass('active');
})

$('.nominees .filter button').on("click", function() {

  // CSS
  for (let i = 0; i < $('.nominees .filter button').length; i++) {
    $('.nominees .filter button').eq(i).removeClass('active');
  }
  $(this).addClass('active');

  // JS
  let $index = $(this).index();
  for (let i = 0; i < $('.nominees .filter-result').length; i++) {
    $('.nominees .filter-result').eq(i).css('display', 'none');
  }
  $('.nominees .filter-result').eq($index).css('display', 'flex');

  let $text = $(this).text();
  $('.nominees .filter .text').text($text);
})

  // NOMINEE SELECT

$('.nominee .text').on("click", function() {
  $(this).next().slideToggle(150);
  $(this).toggleClass('active');
})

  // LABOROTORY FILTER

// Start Value
for (let i = 0; i < $('.laboratory .filter-result').length; i++) {
$('.laboratory .filter-result').eq(i).css('display', 'none');
}
$('.laboratory .filter-result').eq(0).css('display', 'flex');

$('.laboratory .filter .text').on("click", function() {
$(this).next().slideToggle(150);
$(this).toggleClass('active');
})

$('.laboratory .filter button').on("click", function() {

// CSS
for (let i = 0; i < $('.laboratory .filter button').length; i++) {
  $('.laboratory .filter button').eq(i).removeClass('active');
}
$(this).addClass('active');

// JS
let $index = $(this).index();
for (let i = 0; i < $('.laboratory .filter-result').length; i++) {
  $('.laboratory .filter-result').eq(i).css('display', 'none');
}
$('.laboratory .filter-result').eq($index).css('display', 'flex');

let $text = $(this).text();
  $('.laboratory .filter .text').text($text);
})

  // LAB SELECT

$('.lab .text').on("click", function() {
  $(this).next().slideToggle(150);
  $(this).toggleClass('active');
})

})