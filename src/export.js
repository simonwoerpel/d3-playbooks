import {fromJS as _} from 'immutable'
import charts from './charts/available_charts.js'
import chart from './chart.js'

// init
d3.playbooks = {}

const defaults = {global: {}}

// set app-wide defaults
d3.playbooks.defaults = opts => {
  defaults['global'] = opts
}

// chart types as functions
Object.keys(charts).map(c => {
  defaults[c] = {}

  d3.playbooks[c] = opts => {
    const playbook = charts[c]

    // update opts, first global, then from chart type
    opts = _(defaults['global']).merge(_(defaults[c])).merge(_(opts))
    return chart({opts, playbook})
  }

  // add setter method for providing defaults
  // for given chart type
  d3.playbooks[c].defaults = opts => {
    defaults[c] = opts
  }
})
