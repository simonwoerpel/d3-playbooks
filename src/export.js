import {fromJS as _} from 'immutable'
import charts from './charts/available_charts.js'
import chart from './chart.js'

// init
d3.playbooks = {}

// set app-wide defaults
let defaults = {}
d3.playbooks.defaults = opts => {
  defaults = opts
}

// chart types as functions
Object.keys(charts).map(c => {

  d3.playbooks[c] = opts => {
    const playbook = charts[c]

    // update opts, first global, then from chart type
    opts = _(d3.playbooks[c]._defaults).merge(_(defaults)).merge(opts)
    return chart({opts, playbook})
  }

  // add setter method for providing defaults
  // for given chart type
  d3.playbooks[c]._defaults = {}
  d3.playbooks[c].defaults = opts => {
    d3.playbooks[c]._defaults = opts
  }
})
