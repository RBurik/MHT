$(document).ready(function () {

  // PROJECT FILTER
  
// Start Value
for (let i = 0; i < $('.section-projects .filter-result').length; i++) {
  $('.section-projects .filter-result').eq(i).css('display', 'none');
}
$('.section-projects .filter-result').eq(0).css('display', 'flex');

$('.section-projects .tag').on("click", function() {
  var $tagIndex = $(this).index();

  // Tag CSS
  for (let i = 0; i < $('.section-projects .tag').length; i++) {
    $('.section-projects .tag').eq(i).removeClass('tag-active');
  }
  $(this).addClass('tag-active');

  // Tag JS
  for (let i = 0; i < $('.section-projects .filter-result').length; i++) {
    $('.section-projects .filter-result').eq(i).css('display', 'none');
  }
  $('.section-projects .filter-result').eq($tagIndex).css('display', 'flex');
})
})