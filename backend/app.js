var express = require('express');
var app = express();
var envs = require('envs');

app.set('port', envs('PORT', 3000));
app.get('/', function (req, res) {
  res.send('muh');
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port 3000!');
});

