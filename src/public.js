/*
 * make some stuff public for addons to hook into
 */
import {fromJS as _} from 'immutable'
import baseTemplate from './playbooks/template.js'
import publics from './playbooks/publics.js'
import charts from './playbooks/charts/available_charts.js'
import chart from './chart.js'

// init
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

  d3.playbooks[name] = opts => {
    // merge opts
    opts = _(d3.playbooks.CHARTS.baseChart.defaults)  // base defaults
      .mergeDeep(defaults)                     // chart type defaults
      .mergeDeep(overrides.baseChart)          // global overrides
      .mergeDeep(overrides[name])              // chart type overrides
      .mergeDeep(opts)                         // opts
      .toJS()
    // merge plays
    plays = _(d3.playbooks.CHARTS.baseChart.plays).merge(plays)
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
