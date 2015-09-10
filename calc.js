// boilerplate code
var express = require('express'),
    app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

var operate = {
  add: function(n1,n2) { return n1+n2; },
  sub: function(n1,n2) { return n1-n2; },
  mult: function(n1,n2) { return n1*n2; },
  div: function(n1,n2) { return n1/n2; }
};

var ops = {
  add: '+',
  sub: '-',
  mult: '*',
  div: '/'
};

// 'GET' request with URL parameters mdas
app.get('/:op/:n1/:n2', function(req, res) {
  var n1 = parseFloat(req.params.n1);
  var n2 = parseFloat(req.params.n2);
  var op = req.params.op;
  var ans = operate[op](n1,n2);
  var str = n1+' '+ops[op]+' '+n2+' = '+ans;
  res.render('index', {ans:str});
});

// start server
app.listen(3000, function() {
  console.log('Server running on port:3000');
});

