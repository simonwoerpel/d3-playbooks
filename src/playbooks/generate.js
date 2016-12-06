import '../lib/polyfills/is_array.js'

export default ({
  chart,
  template
}) => {
  for (let [func, functions] of template) {
    chart[func] = () => {
      // parent funcs can either be mapping for storing returns
      // or just an array of funcs to run
      if (Array.isArray(functions)) {
        functions.map(f => chart[f](chart))
      } else {
        for (let [attr, f] of functions) {
          // don't store return as value if attr starts with `_`
          if (attr.indexOf('_') == 0) {
            chart[f](chart)
          } else {
            chart[attr] = chart[f](chart)
          }
        }
      }
    }
  }
}
