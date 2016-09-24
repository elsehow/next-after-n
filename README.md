# next-after-ngram

count what follows each n-gram in some list `corpus`
with vanilla JS objects

<!-- see [details.md](details.md). -->

<!-- (interested in contributing?) see [CONTRIBUTING.md](CONTRIBUTING.md). -->

## example

```javascript
var nextafter = require('next-after-ngram')

var noises = [
   'beep'
 , 'beep'
 , 'beep'
 , 'beep'
 , 'snark'
]

var nexts = nextafter(noises, 2)

// what tends to follow each 2-gram?
console.log(nexts)
// {
//    'beep,beep': {
//      beep: 2,
//      snark: 1,
//    },
// }
```

## install

```
npm i next-after-ngram
```

## license

BSD
