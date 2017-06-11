'use strict';
var app = app || {};

(function(module) {
  const twitterController = {};

  twitterController.index = () => {

    app.repos.requestTweets(app.twitterView.index);
  };
  module.twitterController = twitterController;
})(app);
