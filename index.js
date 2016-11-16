var express = require('express');
var app = new express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res, next) {
  res.render('homepage');
});

app.get('/game', function(req, res, next) {
  res.render('space_shooter_part_five');
});


app.listen(3000, function() {
  console.log('listening on port 3000');
});
