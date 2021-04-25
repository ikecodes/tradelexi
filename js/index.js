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

// FAQ
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.faq_icon').on('click', (e) => {
  e.target.classList.toggle('clicked');
  const parent = e.target.parentNode;
  parent.children[2].classList.toggle('clicked');
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let emailFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
let passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;
// FORMS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('#signin_name').on('keyup', () => {
  if ($('#signin_name').val().length >= 8) {
    $('#nameverify').html('good!').css('color', 'green');
  } else {
    $('#nameverify').html('minimum 8 characters').css('color', 'red');
  }
});
$('#signin_name').on('blur', () => {
  $('#nameverify').html('');
});

$('#signin_email').on('keyup', () => {
  if ($('#signin_email').val().match(emailFormat)) {
    $('#emailverify').html('good!').css('color', 'green');
  } else {
    $('#emailverify').html('follow standard mail format e.g example@mail.com').css('color', 'red');
  }
});
$('#signin_email').on('blur', () => {
  $('#emailverify').html('');
});

$('#signin_password').on('keyup', () => {
  if ($('#signin_password').val().match(passwordFormat)) {
    $('#passverify').html('good!').css('color', 'green');
  } else {
    $('#passverify').html('lowercase, uppercase, number and minimum 8 characters').css('color', 'red');
  }
});
$('#signin_password').on('blur', () => {
  $('#passverify').html('');
});
$('#signin_passwordConfirm').on('keyup', function () {
  if ($('#signin_password').val() == $('#signin_passwordConfirm').val()) {
    $('#confirmverify').html('password and password confirm match 🙂').css('color', 'green');
  } else $('#confirmverify').html('password and password confirm does not match ☹').css('color', 'red');
});
$(' #signin_passwordConfirm').on('blur', function () {
  $('#confirmverify').html('');
});

$('#hide1').on('click', function () {
  if ($('#signin_password').attr('type') == 'password') {
    $('#hide1').removeClass('fa-eye-slash').addClass('fa-eye');
    $('#signin_password').attr('type', 'text');
  } else {
    $('#hide1').removeClass('fa-eye').addClass('fa-eye-slash');
    $('#signin_password').attr('type', 'password');
  }
});
$('#hide1').on('click', function () {
  if ($('#signup_password').attr('type') == 'password') {
    $('#hide1').removeClass('fa-eye-slash').addClass('fa-eye');
    $('#signup_password').attr('type', 'text');
  } else {
    $('#hide1').removeClass('fa-eye').addClass('fa-eye-slash');
    $('#signup_password').attr('type', 'password');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DELETE BUTTON//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.profile_delete_cancel, .profile_delete_yes').on('click', () => {
  $('.profile_delete_box').removeClass('clicked');
});
$('.profile_delete_button').on('click', () => {
  console.log('clicked');
  $('.profile_delete_box').addClass('clicked');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
