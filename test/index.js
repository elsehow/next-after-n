var nextn = require('..')
var test = require('tape')

var noises = [
   'beep'
 , 'beep'
 , 'beep'
 , 'beep'
 , 'snark'
]

test('nextn', t => {
  var nextns = nextn(noises, 2)
  // what follows each 2-gram?
  t.deepEquals(nextns,
               {
    'beep,beep': {
      beep: 2,
      snark: 1,
    },
  })
  var nextns = nextn(noises, 3)
  // what follows each 2-gram?
  t.deepEquals(nextns, {
    'beep,beep,beep': {
      beep: 1,
      snark: 1,
    },
  })
  t.end()
})
