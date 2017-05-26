'use strict';
var app = app || {};
const gitHubToken = '351de1d82688e3c35ca74713145ddec905815600';

(function(module) {
  const repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${gitHubToken}`
      }
    })
    .then(data => repos.all = data, err => console.error(err))
    .then(callback)
  };
  repos.with = attr =>
  repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app);
