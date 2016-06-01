var express = require('express');
var app = express();
var port = 3700;

app.get('/', function(reg, res) {
  res.send('Server initialized');
});

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('listening on port ', port);

app.set('views', __dirname + '/template');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.get('/', function(req, res) {
  res.render('page');
});
