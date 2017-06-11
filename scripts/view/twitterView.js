'use strict';
var app = app || {};

(function(module) {
  const twitterView = {};

  const render = Handlebars.compile($('#twitter-template').html());

  twitterView.index = function() {
    $('#github').append(
      app.repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };
  module.twitterView = twitterView;
})(app);
