// NAVIGATION
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.navbar_icon').on('click', () => {
  // $('.navbar_icon').toggleClass('clicked');
  if ($('.navbar_icon').hasClass('fa-bars')) {
    $('.navbar_icon').removeClass('fa-bars');
    $('.navbar_icon').addClass('fa-times clicked');
  } else {
    $('.navbar_icon').addClass('fa-bars');
    $('.navbar_icon').removeClass('fa-times clicked');
  }

  $('.navbar').toggleClass('clicked');
});
$('.navbar a').on('click', () => {
  $('.navbar_icon').removeClass('clicked');
  $('.navbar').removeClass('clicked');
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
