// 'use strict';
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3000;
//
//
//
// const app = express();
//
// //This is the middleware of the code... From stackOverFlow.com it states that bodyparser.json(), "Parses the text as JSON and exposes the resulting object on req.body"
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('.'));
//
// // So this connects the client to the Client Constructor that passes through the URL as the argument...
// const client = new pg.Client(conString);
//
//
// //This actually tells our port to start running when nodemon or node server.js is ran
// app.listen(PORT, function() {
//   console.log(`Server started on port ${PORT}!`);
// });


'use strict';

const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('./public'))

app.listen(PORT, function() {

  console.log('My Portfolio is open on port: ' + PORT);
});
