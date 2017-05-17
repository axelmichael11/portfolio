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



// $('.navBarlinks i').hide();
$('#menu-icon').on('click', function() {
  $('.navBarlinks').show();
  // $('#about-page').fadeIn();
  // $('#portfolio-page').fadeIn();
})
