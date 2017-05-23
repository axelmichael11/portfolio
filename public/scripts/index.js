'use strict';
var app = app || {};

var introduction = 'Aspiring JavaScript Dev producing high quality responsive websites';

// I kept to a similar structure concerning the IIFE we did in class, simply to free up the global name space...
(function(module){
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

  Project.loadAll = function(rows) {
    Project.all = rows.map(function(ele) { //streamlined .map()
      return new Project(ele);
    });
  };

  //I'm not exactly if we need this? if we are using the similar loadAll and fetchAll methods...?
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
  };

// as of right now, I couldn't come up with a really cool way of using reduce, as this simply adds the word count of my description.... (kind of lame) I am thinking of editing it to include a word count of the document I am going to attach!
  Project.descriptionWordCount = () => {
    return Project.all.map(function(project) {
      return project.description.split(' ');
    })
    .reduce(
      function(acc, curr) {
        return acc+ curr;
      }).length;
  };
  module.Project = Project;
}(app));


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

aboutPageGenerator();
