'use strict';


$('#about').on('click',function() {
  console.log('you clicked on it');
});

$('#about').on('click',function() {
  $('html, body').animate({ scrollTop: 85 }, 600);
  return false;
});

$('#about-icon').on('click',function() {
  $('html, body').animate({ scrollTop: 85 }, 600);
  return false;
});

$('#portfolio').on('click',function() {
  $('html, body').animate({ scrollTop: 800 }, 600);
  return false;
});
$('#portfolio-icon').on('click',function() {
  $('html, body').animate({ scrollTop: 800 }, 600);
  return false;
});
