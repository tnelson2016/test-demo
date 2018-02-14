require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const HTTPError = require('node-http-error')
const { pluck } = require('ramda')
const db = new PouchDB(process.env.COUCH_DB_URL)

const allDocs = options =>
  db.allDocs(options).then(docs => pluck('doc', docs.rows))

module.exports = { allDocs }
