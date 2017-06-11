'use strict';


const portfolioView = {};


portfolioView.initIndexPage = function() {
  app.Project.all.forEach(function(project) {
    $('#template').append(project.toHtml())
  });
}


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
  $('.nav-bar-links i').fadeIn(400);
  $('#icon-menu').hide();
  $('#icon-menu-clicked').show();
});

$('#icon-menu-clicked').on('click', function() {
  $('.nav-bar-links i').fadeOut(400);
  $('#icon-menu').show();
  $('#icon-menu-clicked').hide();
});

// app.Portfolio.fetchAll();
// module.portfolioView = portfolioView;
