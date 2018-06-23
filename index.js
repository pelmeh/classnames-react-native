module.exports = function ClassNames (...args) {
  return args.reduce((memo = [], item) => {
    if (!item) return memo

    if (Array.isArray(item)) {
      pairs(item, ([ style, conditions ]) => {
        if (conditions) memo.push(style)
      })
    } else {
      if (typeof item === 'number' || typeof item === 'object') {
        memo.push(item)
      }
    }
    
    return memo
  }, [])
}

function pairs(array, callback) {
  for(var i = 0; i < array.length; i++) {
    callback([ array[i], array[i + 1] ]) // callback([ even, odd ])
    i++
  }
}
