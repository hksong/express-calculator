// boilerplate code
var express = require('express'),
    app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

// 'GET' request with URL parameters
app.get('/add/:n1/:n2', function(req, res) {
  var ans = parseInt(req.params.n1) + parseInt(req.params.n2);
});

// 'GET' request to '/' using ejs
app.get('/', function (req, res) {
  res.render('index', {veggies: vegetables});
});

// start server
app.listen(3000, function() {
  console.log('Server running on port:3000');
});

