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

})