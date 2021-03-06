require('dotenv').config();
const MongoClient = require( 'mongodb' ).MongoClient;

let _db;
const uri = process.env.CONNECTION_STRING;

/**
 * Connects to database.
 *
 * @param {function} callback - Function called when connection is successful.
 */
function connectToServer(callback) {
  const client = new MongoClient(uri, { useNewUrlParser: true });

  client.connect((err, client) => {
      if (err)
        console.log(err);

      _db = client.db('transactions');
      return callback(err);
    });
}

/**
 * Returns the database instance. May be null if not initialized.
 *
 * @returns {Object} - Database instance.
 */
function getDb() {
  return _db;
}

module.exports = { connectToServer, getDb };