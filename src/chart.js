import setupPlaybook from './playbooks/generate.js'
import template from './playbooks/template.js'
import {playbooks} from './charts/available_charts.js'
import Settings from './playbooks/defaults.js'

export default opts => {
  const chart = () => {}

  // merge with defaults
  opts = Settings(opts)

  // set playbook funcs as properties for this chart.
  // they could be overwritten via the settings merge below
  for (let [name, attr] of playbooks[opts.kind]) {
    chart[name] = attr
  }
  for (let prop in opts) {
    chart[prop] = opts[prop]
  }

  setupPlaybook({chart, template})
  chart.init()

  // this should be invoked from "outside"
  chart.build = () => {
    chart.data.then(data => {
      chart.data = data
      chart.render()
    })
  }

  return chart
}
