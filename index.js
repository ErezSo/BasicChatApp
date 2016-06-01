var express = require('express');
var app = express();
var port = 3700;

app.get('/', function(reg, res) {
  res.send('Server initialized');
});

app.listen(port);
console.log('listening on port ', port);
