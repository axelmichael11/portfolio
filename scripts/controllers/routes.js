'use strict';
var app = app || {};

page('/portfolio', app.portfolioController.index);
page('/about', app.aboutController.index);
page();
