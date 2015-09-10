// boilerplate code
var express = require('express'),
    app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

// 'GET' request with URL parameters addition
app.get('/add/:n1/:n2', function(req, res) {
  var n1 = parseFloat(req.params.n1);
  var n2 = parseFloat(req.params.n2);
  var ans = n1 + n2;
  var str = n1+' + '+n2+' = '+ans;
  res.render('index', {ans:str});
});
// 'GET' request with URL parameters sub
app.get('/sub/:n1/:n2', function(req, res) {
  var n1 = parseFloat(req.params.n1);
  var n2 = parseFloat(req.params.n2);
  var ans = n1 - n2;
  var str = n1+' - '+n2+' = '+ans;
  res.render('index', {ans:str});
});
// 'GET' request with URL parameters mult
app.get('/mult/:n1/:n2', function(req, res) {
  var n1 = parseFloat(req.params.n1);
  var n2 = parseFloat(req.params.n2);
  var ans = n1 * n2;
  var str = n1+' * '+n2+' = '+ans;
  res.render('index', {ans:str});
});
// 'GET' request with URL parameters div
app.get('/div/:n1/:n2', function(req, res) {
  var n1 = parseFloat(req.params.n1);
  var n2 = parseFloat(req.params.n2);
  var ans = n1 / n2;
  var str = n1+' / '+n2+' = '+ans;
  res.render('index', {ans:str});
});

// start server
app.listen(3000, function() {
  console.log('Server running on port:3000');
});

