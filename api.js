const express = require('express')
const request = require('supertest')
const app = express()
const { allDocs } = require('./dal')
const HTTPError = require('node-http-error')

app.get('/tacos', function(req, res, next) {
  allDocs({ include_docs: true })
    .then(docs => res.status(200).send(docs))
    .catch(err => next(new HTTPError(err.status, err.message, err)))
})

app.use((err, req, res, next) => {
  console.log('ERROR', err)
  res.status(err.status).send(err.message)
})

// module.parent -- the test module that required api.js module
// if a test module did not require in api.js,
//then listen for outside client http requests on port 5555

if (!module.parent) {
  app.listen(process.env.PORT || 5555, () =>
    console.log('TACOS!', process.env.PORT || 5555)
  )
}

module.exports = app
