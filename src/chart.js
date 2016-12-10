import setupPlaybook from './playbooks/generate.js'
import template from './playbooks/template.js'
import playbooks from './charts/available_charts.js'

export default opts => {
  const chart = () => {}
  const playbook = playbooks[opts.kind]

  // merge opts with defaults
  const settings = playbook.get('defaults').mergeDeep(opts).toJS()

  // the main object that will hold
  // information and might change over time
  const C = {}

  // set playbook funcs as properties for this chart.
  // they could be overwritten via the settings merge below
  for (let [name, attr] of playbook.get('plays')) {
    C[name] = attr
  }

  // settings and getter / setter methods for these
  Object.keys(settings).map(name => {
    C[name] = settings[name]
    // chart[name] = function(val) {
    chart[name] = (...val) => {
      if (val.length === 1) {
        C[name] = val[0]
        return chart
      } else return C[name]
    }
  })

  setupPlaybook({template, C})

  // this should be invoked from "outside"
  chart.build = () => {
    C.init()
    C.data.then(d => {
      C.data = d
      // FIXME
      if (C.multiData) {
        C.multiData.then(d => {
          C.multiData = d
          C.render()
        })
      } else C.render()
    })
  }

  // public methods
  chart.render = C.render

  return chart
}
