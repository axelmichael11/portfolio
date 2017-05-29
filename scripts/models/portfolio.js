'use strict';
var app = app || {}; //why both app OR an empty object?


var introduction = 'Aspiring JavaScript Dev producing high quality responsive websites';

// I kept to a similar structure concerning the IIFE we did in class, simply to free up the global name space...
(function(module){
  Portfolio.all = [];
  function Portfolio(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Portfolio.prototype.toHtml = function () {
    var template = $('.template').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  }

  Portfolio.loadAll = function(rows) {
    Portfolio.all = rows.map(ele=> new Portfolio(ele));
  };

  //I'm not exactly if we need this? if we are using the similar loadAll and fetchAll methods...?
  // PortfolioData.forEach(function(PortfolioObject) {
  //   Portfolio.all.push(new Portfolio(PortfolioObject));
  // });

  Portfolio.all.forEach(function(Portfolio) {
    $('#portfolio-pages').append(Portfolio.toHtml());
  });

  Portfolio.fetchAll = function(callback) {
    $.ajax({
      url: '/data/project_data.JSON',
      method: 'GET'
    })
    .then(
      function(data) {
        Portfolio.loadAll(data);
        localStorage.rawData = JSON.stringify(data);
        callback();
      }
    )
  };

// as of right now, I couldn't come up with a really cool way of using reduce, as this simply adds the word count of my description.... (kind of lame) I am thinking of editing it to include a word count of the document I am going to attach!
  Portfolio.descriptionWordCount = () => {
    return Portfolio.all.map(function(portfolio) {
      return portfolio.description.split(' ');
    })
    .reduce(
      function(acc, curr) {
        return acc+ curr;
      }).length;
  };
  module.Portfolio = Portfolio;
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
