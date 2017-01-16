import setupPlaybook from './playbooks/generate.js'

export default ({opts, template, plays}) => {
  const chart = () => {}

  // the main object that will hold
  // information and might change over time
  const C = {}

  // set playbook funcs as properties for this chart.
  // they could be overwritten via the opts merge below
  for (let [name, attr] of plays) {
    C[name] = attr
  }

  // opts and getter / setter methods
  Object.keys(opts).map(name => {
    C[name] = opts[name]
    chart[name] = (...val) => {
      if (val.length === 1) {
        C.ready.then(() => C[name] = val[0])
        return chart
      } else return C[name]
    }
  })

  setupPlaybook(template, C)

  C.init()

  // load async data
  C.rawData.then(d => C.rawData = d)

  // public methods
  d3.playbooks.PUBLIC_METHODS.map(func => {
    chart[func] = opts => {
      C.ready.then(() => C[func](opts))
      return chart
    }
  })

  return chart
}
