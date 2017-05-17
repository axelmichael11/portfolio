'use strict';

var profilePic = 'images/profilePic';
var introduction = 'Aspiring JavaScript Dev producing high quality responsive websites';


var projects = [];
function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.publishedOn = rawDataObj.publishedOn;
  this.description = rawDataObj.description
}

Project.prototype.toHtml = function () {
  // var $newProject = $('article.template').clone();
  // $newProject.removeClass('template');
  // if (!this.publishedOn) $newProject.addClass('draft');
  // $newProject.find('h2').html(this.title);
  // $newProject.find('h3').html(this.publishedOn);
  // $newProject.find('p').html(this.description);
  // return $newProject;
  var template = $('.template').html();
  //this is my handlebars code!!!!
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
}

function aboutPageGenerator() {
  var about = document.getElementById('about-page');
  var div = document.createElement('div');
  div.setAttribute('id','about-page-info');

  var title = document.createElement('h1');
  title.setAttribute('id','title');
  title.textContent= 'Michael Axelson';

  var intro = document.createElement('p');
  intro.setAttribute('id','intro');
  intro.textContent = introduction;

  div.appendChild(title);
  div.appendChild(intro);
  about.appendChild(div);
}

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#portfolio-pages').append(project.toHtml());
});

aboutPageGenerator();
