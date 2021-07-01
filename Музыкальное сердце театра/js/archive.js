$(document).ready(function () {

  // ARCHIVE FILTER
  
// Start Value
for (let i = 0; i < $('.section-archive .filter-result').length; i++) {
  $('.section-archive .filter-result').eq(i).css('display', 'none');
}
$('.section-archive .filter-result').eq(0).css('display', 'block');

$('.section-archive .tag').on("click", function() {
  var $tagIndex = $(this).index();

  // Tag CSS
  for (let i = 0; i < $('.section-archive .tag').length; i++) {
    $('.section-archive .tag').eq(i).removeClass('tag-active');
  }
  $(this).addClass('tag-active');

  // Tag JS
  for (let i = 0; i < $('.section-archive .filter-result').length; i++) {
    $('.section-archive .filter-result').eq(i).css('display', 'none');
  }
  $('.section-archive .filter-result').eq($tagIndex).css('display', 'block');
})
})