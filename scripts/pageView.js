'use strict';

//This is for page anchors! I want to eventually use this code instead of reloading the data on the page....
// $('#about').on('click',function() {
//   console.log('you clicked on it');
// });
//
// $('#about').on('click',function() {
//   $('html, body').animate({ scrollTop: 85 }, 600);
//   return false;
// });
//
// $('#about-icon').on('click',function() {
//   $('html, body').animate({ scrollTop: 85 }, 600);
//   return false;
// });
//
// $('#portfolio').on('click',function() {
//   $('html, body').animate({ scrollTop: 800 }, 600);
//   return false;
// });
// $('#portfolio-icon').on('click',function() {
//   $('html, body').animate({ scrollTop: 800 }, 600);
//   return false;
// });


$('ul li').on('click', function() {
  $('#about-page').hide();
  $('#portfolio-pages').hide();
  if ($(this).is('#about')) { //|| $(this).is('#about-icon')
    $('#about-page').fadeIn(700);
  } else if ($(this).is('#portfolio')) { //|| $(this).is('#portfolio-icon')
    $('#portfolio-pages').fadeIn(700);
  }
})

$('ul i').on('click', function() {
  $('#about-page').hide();
  $('#portfolio-pages').hide();
  if ($(this).is('#about-icon')) {
    $('#about-page').fadeIn(700);
  } else if ($(this).is('#portfolio-icon')) {
    $('#portfolio-pages').fadeIn(700);
  }
});



$('.nav-bar-links i').hide();
$('#icon-menu-clicked').hide();

$('#icon-menu').on('click', function() {
  $('.nav-bar-links i').toggle('slow').fadeIn(300);
  $('#icon-menu').hide();
  $('#icon-menu-clicked').show();
  // $('#about-page').fadeIn();
  // $('#portfolio-page').fadeIn();
})

$('#icon-menu-clicked').on('click', function() {
  $('.nav-bar-links i').toggle('slow').fadeOut(300);
  $('#icon-menu').show();
  $('#icon-menu-clicked').hide();
});
