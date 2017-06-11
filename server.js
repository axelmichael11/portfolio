'use strict';

const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const proxy = require('express-request-proxy');
const cheerio = require('cheerio');
const request = require('request');

app.use(express.static('.'))

app.listen(PORT, function() {

  console.log('My Portfolio is open on port: ' + PORT);
});


function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (proxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

function proxyTwitter(request, response) {
  console.log('Routing Twitter request for', request.params[0]);
  (proxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.TWITTER_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('/twitter/*', proxyTwitter);



//Hypem webscraping process...
