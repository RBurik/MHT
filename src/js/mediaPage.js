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

  // PHOTO FILTER
  
// Start Value
for (let i = 0; i < $('.photo .filter-result').length; i++) {
  $('.photo .filter-result').eq(i).css('display', 'none');
}
$('.photo .filter-result').eq(0).css('display', 'block');

$('.photo .tag').on("click", function() {
  var $tagIndex = $(this).index();

  // Tag CSS
  for (let i = 0; i < $('.photo .tag').length; i++) {
    $('.photo .tag').eq(i).removeClass('tag-active');
  }
  $(this).addClass('tag-active');

  // Tag JS
  for (let i = 0; i < $('.photo .filter-result').length; i++) {
    $('.photo .filter-result').eq(i).css('display', 'none');
  }
  $('.photo .filter-result').eq($tagIndex).css('display', 'block');
})

  // VIDEO FILTER

// Start Value
for (let i = 0; i < $('.video .filter-result').length; i++) {
$('.video .filter-result').eq(i).css('display', 'none');
}
$('.video .filter-result').eq(0).css('display', 'flex');

$('.video .tag').on("click", function() {
var $tagIndex = $(this).index();

// Tag CSS
for (let i = 0; i < $('.video .tag').length; i++) {
  $('.video .tag').eq(i).removeClass('tag-active');
}
$(this).addClass('tag-active');

// Tag JS
for (let i = 0; i < $('.video .filter-result').length; i++) {
  $('.video .filter-result').eq(i).css('display', 'none');
}
$('.video .filter-result').eq($tagIndex).css('display', 'flex');
})
})