import setupPlaybook from './playbooks/generate.js'
import template from './playbook.js'
import {PLAYBOOKS} from './playbooks/charts.js'
import Settings from './playbooks/defaults.js'

export default class {

  constructor(opts) {
    opts = Settings(opts)

    // set playbook funcs as properties for this chart.
    // they could be overwritten via the settings merge below
    for (let [name, attr] of PLAYBOOKS[opts.kind]) {
      this[name] = attr
    }

    for (let prop in opts) {
      this[prop] = opts[prop]
    }

    setupPlaybook({
      chart: this,
      template: template
    })

    this.init()
  }

  build() {
    this.data.then(data => {
      this.data = data
      this.render()
    })
  }
}
