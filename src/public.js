/*
 * make some stuff public for addons to hook into
 */

// polyfills
import './utils/polyfills/object_assign.js'
import './utils/polyfills/is_array.js'

import baseTemplate from './playbooks/template.js'
import publics from './playbooks/publics.js'
import charts from './playbooks/charts/available_charts.js'
import chart from './chart.js'


// init library
d3.playbooks = {}
d3.playbooks.TEMPLATE = baseTemplate
d3.playbooks.CHARTS = charts
d3.playbooks.PUBLIC_METHODS = publics

const overrides = {}

// set app-wide defaults
d3.playbooks.defaults = opts => {
  overrides.baseChart = opts
}

// add new chart type as function
d3.playbooks.addChart = (name, {defaults, plays}) => {

  overrides[name] = {}

  d3.playbooks[name] = options => {
    // merge opts
    const opts = Object.assign({},
      d3.playbooks.CHARTS.baseChart.defaults,  // base defaults
      defaults,                                // chart type defaults
      overrides.baseChart,                     // global overrides
      overrides[name],                         // chart type overrides
      options                                  // concrete opts
    )
    // merge plays
    plays = Object.assign({}, d3.playbooks.CHARTS.baseChart.plays, plays)
    const template = d3.playbooks.TEMPLATE
    return chart({opts, template, plays})
  }

  // add setter method for override defaults
  // for given chart type
  d3.playbooks[name].defaults = opts => {
    overrides[name] = opts
  }
}

// add concrete chart types
for (let name in charts) {
  d3.playbooks.addChart(name, charts[name])
}
