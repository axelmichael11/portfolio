'use strict';
var app = app || {};


(function(module) {
  const tweets = {};
  tweets.all = [];

  tweets.requestTweets = function(callback) {
    $.ajax({
      url:''

    }'/github/user/tweets')
    .then(data => {tweets.all = data;
      tweets.all = tweets.all.slice((tweets.all.length - 10), tweets.all.length);
    }, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };

  tweets.with = attr => tweets.all.filter(repo => repo[attr]);


  console.log(tweets);

  module.tweets = tweets;
})(app);
