module.exports = function nextn (corpus, n)
{
  if (!n)
    n=1
  if (!corpus || !corpus.length)
    throw 'Error! Must provide a list `corpus` to nextn'
  var model = {}
  function update (ngm, nxt) {
    if (!model[ngm])
      model[ngm] = {}
    if (!model[ngm][nxt]) {
      model[ngm][nxt] = 1
      return
    }
    model[ngm][nxt] += 1
    return
  }
  for (var i=0;i<corpus.length-n;i++) {
    var this_ngram = corpus.slice(i,i+n)
    var next = corpus[i+n]
    update(this_ngram, next)
  }
  return model
}
