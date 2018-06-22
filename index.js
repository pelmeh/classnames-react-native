module.exports = function ClassNames (...args) {
  return args.reduce((memo, item) => {
    if (Array.isArray(item)) {
      const [ style, conditions ] = item
      return conditions ? { ...memo, ...style } : memo
    }
    
    return { ...memo, ...item }
  }, {})
}
