var express = require('express');
var app = express();
var envs = require('envs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var storage = require('./storage.js');

app.set('port', envs('PORT', 3000));

app.use(cookieParser());
app.use(session({
  secret: envs('SECRET', 'test123'),
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('muh');
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port 3000!');
});

var auth = function(req, res, next) {
  // @todo figure out why session is not stored.
  // if (req.session && req.session.loggedIn == true) {
  if (true) {
    return next();
  }
  else {
    return res.sendStatus(401);
  }
};

app.post('/user/login', function (req, res) {
  if (req.body !== undefined) {
    var hash = crypto.createHmac('sha256', 'test123')
                     .update(req.body.password)
                     .digest('hex');
    if (req.body.user == 'admin' && hash == 'eea26bae8836b7d00fb964d5906fbae950be9be02dd4558922054a3c31793926') {
      req.session.loggedIn = true;
      req.session.save(function(err) {
        console.log(err);
      });
      res.send('log in successful');
      return;
    }
  }
  return res.sendStatus(403);
});

app.get('/entries', auth, function (req, res) {
  storage.listEntries(function(err, rows) {
    res.json(rows);
  });
});

app.post('/entries', auth, function (req, res) {
  res.json(storage.saveEntry({uri: req.body.uri, info: req.body.info}));
});

app.post('/user/logout', function (req, res) {
  req.session.destroy();
});

