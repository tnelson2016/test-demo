const request = require('supertest')
const test = require('tape')
const app = require('../api')

request(app)
  .get('/tacos')
  .expect(200)
  .expect('Content-Type', /json/)
  .then(tacosResponse =>
    test('GET /TACOS', function(t) {
      t.plan(1)
      t.equals(tacosResponse.body.length, 3, 'response body contains 3 tacos')
    })
  )
  .catch(err => console.log(err))
