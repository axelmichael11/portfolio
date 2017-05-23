'use strict';

var profilePic = 'images/profilePic';
var introduction = 'Aspiring JavaScript Dev producing high quality responsive websites';



Project.all = [];
function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.publishedOn = rawDataObj.publishedOn;
  this.description = rawDataObj.description
}

Project.prototype.toHtml = function () {
  var template = $('.template').html();
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

Project.loadAll = function(data) {
  data.forEach(function (object) {
    Project.all.push(new Project(object));
  })
};

projectData.forEach(function(projectObject) {
  Project.all.push(new Project(projectObject));
});

Project.all.forEach(function(project) {
  $('#portfolio-pages').append(project.toHtml());
});

Project.fetchAll = function() {
  $.getJSON('data/project_data.JSON')
  .then(
    function(data) {
      Project.loadAll(data);
      localStorage.rawData = JSON.stringify(data);
      Project.initIndexPage();
    }
  )
}

aboutPageGenerator();
