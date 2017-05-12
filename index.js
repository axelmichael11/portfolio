'use strict';

var profilePic = 'images/profilePic';
var introduction = 'Aspiring JavaScript Dev producing high quality responsive websites';

//this constructor will eventually render my portfolio projects to the page inside of divs...


function portfolioConstructor(rawDataObj) {
  this.title = rawDataObj.title;
  this.publishedOn = rawDataObj.publishedOn;
  this.description = rawDataObj.description
}



function navBarGenerator(){
  //getting the profile picture to the page...
  var nav = document.getElementById('nav');
  //still thinking about where to put a picture of myself!
  // var img = document.createElement('img');
  // img.setAttribute('href',profilePic);
  // img.setAttribute('id','profilePic');

  //getting the about, and portfolio links going...
  var navBarlinks = document.createElement('ul');
  navBarlinks.setAttribute('class','navBarlinks');

  var about =  document.createElement('li');
  about.setAttribute('id','about');
  about.textContent = 'About';
  var portfolio =  document.createElement('li');
  portfolio.setAttribute('id','portfolio');
  portfolio.textContent = 'Portfolio';

  navBarlinks.appendChild(about);
  navBarlinks.appendChild(portfolio);


  //get everything appending to the nav bar...
  // nav.appendChild(img);
  nav.appendChild(navBarlinks);
}

function aboutPageGenerator() {
  //creating initial intro div
  var about = document.getElementById('about-page');
  var div = document.createElement('div');
  div.setAttribute('id','about-page-info');

  //here I am writing my name, and small intro...
  var title = document.createElement('h1');
  title.setAttribute('id','title');
  title.textContent= 'Michael Axelson';

  var intro = document.createElement('p');
  intro.setAttribute('id','intro');
  intro.textContent = introduction;

  //here I am writing my short intro to the page...
  div.appendChild(title);
  div.appendChild(intro);
  about.appendChild(div);
}



navBarGenerator();
aboutPageGenerator();
