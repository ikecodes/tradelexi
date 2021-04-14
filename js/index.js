$('.navbar_icon').on('click', () => {
  $('.navbar_icon').toggleClass('clicked');
  $('.navbar').toggleClass('clicked');
});
$('.navbar a').on('click', () => {
  $('.navbar_icon').removeClass('clicked');
  $('.navbar').removeClass('clicked');
});
