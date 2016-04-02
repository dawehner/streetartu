var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run('CREATE TABLE images(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, uri VARCHAR (255), info text)');
});

var saveEntry = function(entry) {
  console.log('save entry');
  var stmt = db.prepare('INSERT INTO images VALUES (NULL, ?, ?)');
  stmt.run(entry.uri, entry.info);
  stmt.finalize();
};

var listEntries = function(callback) {
  console.log('list entries');
  var result = [];
  db.all('SELECT * FROM images', callback);
};

exports.saveEntry = saveEntry;
exports.listEntries = listEntries;

