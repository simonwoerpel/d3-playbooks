import setupPlaybook from './playbooks/generate.js'
import template from './playbooks/template.js'
import {playbooks} from './charts/available_charts.js'
import Settings from './playbooks/defaults.js'

export default opts => {
  const chart = () => {}

  // merge with defaults
  opts = Settings(opts)

  // the main object that will hold
  // information and might change over time
  const C = {}

  // set playbook funcs as properties for this chart.
  // they could be overwritten via the settings merge below
  for (let [name, attr] of playbooks[opts.kind]) {
    C[name] = attr
  }
  for (let prop in opts) {
    C[prop] = opts[prop]
    // getter / setter methods
    chart[prop] = function(val) {
      if (arguments.length === 1) {
        C[prop] = val
        return chart
      } else return C[prop]
    }
  }

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
