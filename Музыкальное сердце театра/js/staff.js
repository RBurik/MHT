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

// ACADEMICS FILTER 

// Start Value
// for (let i = 0; i < $('.academics .filter-result').length; i++) {
//   $('.academics .filter-result').eq(i).css('display', 'none');
// }
// $('.academics .filter-result').eq(0).css('display', 'flex');

// $('.academics .tag').on("click", function() {
// var $tagIndex = $(this).index();

// // Tag CSS
// for (let i = 0; i < $('.academics .tag').length; i++) {
//   $('.academics .tag').eq(i).removeClass('tag-active');
// }
// $(this).addClass('tag-active');

// // Tag JS
// for (let i = 0; i < $('.academics .filter-result').length; i++) {
//   $('.academics .filter-result').eq(i).css('display', 'none');
// }
//   $('.academics .filter-result').eq($tagIndex).css('display', 'flex');
// })

})