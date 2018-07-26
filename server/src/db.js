import fs from 'fs';
const dbFile = './.data/sqlite.db';
const exists = fs.existsSync(dbFile);

import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(function(){
  if (!exists) {
    db.run('CREATE TABLE users (provider TEXT, id TEXT, name TEXT, email TEXT, avatar TEXT)');
    console.log('New table users created!');
  }
  else {
    console.log('Database ready to go!');
    db.each('SELECT * from users', function(err, row) {
      if ( row ) {
        console.log('record:', row);
      }
    });
  }
});

export default db;