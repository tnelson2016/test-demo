require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))

console.log(process.env.COUCH_DB_URL)

const db = new PouchDB(process.env.COUCH_DB_URL)

db
  .bulkDocs([
    { _id: 'taco_chalupa', name: 'Chalupa', type: 'taco' },
    { _id: 'taco_supreme', name: 'Supreme', type: 'taco' },
    { _id: 'taco_loco', name: 'Loco', type: 'taco' }
  ])
  .then(result => console.log('bulkDocs success!', result))
  .catch(err => console.log('bulkDocs Error!', err))
