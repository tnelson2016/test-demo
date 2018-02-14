const test = require('tape')

test('simple test', function(t) {
  t.plan(2)

  t.equal(400, 400, 'Is 400 = 400?')
  t.notEqual(400, 400, 'Is 400 != 400?')

  t.end()
})
