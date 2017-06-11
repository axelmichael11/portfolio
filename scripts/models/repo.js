'use strict';
var app = app || {};


(function(module) {
  const repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => {repos.all = data;
      repos.all = repos.all.slice((repos.all.length - 5), repos.all.length);
    }, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);


  console.log(repos);

  module.repos = repos;
})(app);
