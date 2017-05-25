'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  let render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {

    $('#github').append(
      app.repos.map(render) // Want to filter by a different property other than name?
    );
  };
  module.repoView = repoView;
})(app);
