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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

storage.initialData();

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
  console.log(req.body);
  if (req.body !== undefined) {
    var hash = crypto.createHmac('sha256', 'test123')
                     .update(req.body.password)
                     .digest('hex');
    console.log(hash);
    console.log(req.body.username);
    console.log(req.body.username == 'admin');
    if (req.body.username == 'admin' && hash == '9e1cdea55a6add8dc6688fbabfd6dd28b1b7896fa39aa36a0bef8f5e6c06c680') {
      req.session.loggedIn = true;
      req.session.save(function(err) {
        console.log(err);
      });
      res.status(200);
      res.send('log in successful');
      return;
    }
    else {
      // @todo erturn some information about failed login.
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
  storage.saveEntry({uri: req.body.uri, info: req.body.info}, function (id) {
    res.json({'id': id});
  });
});

app.post('/user/logout', function (req, res) {
  req.session.destroy();
  res.status(200);
  res.send('log out successful');
});

