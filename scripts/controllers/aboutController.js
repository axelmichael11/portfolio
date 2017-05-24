'use strict';

var app = ap || {};


(function(module) {
  const aboutController = {};
  aboutController.index = () => {
    app.Project.fetchAll(app.articleView.initIndexPage);

    $('#about-page').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(app);
