import baseChart from './base_chart.js'

import barChart from './bar_chart.js'
import scatterChart from './scatter_chart.js'
import lineChart from './line_chart.js'
// import multiLineChart from './multiline_chart.js'
import timeLineChart from './timeline_chart.js'
// import multiTimeLineChart from './multitimeline_chart.js'

const PLAYBOOKS = {
  barChart: baseChart.merge(barChart),
  scatterChart: baseChart.merge(scatterChart),
  lineChart: baseChart.merge(lineChart),
  // multiLineChart: new Playbook(multiLineChart),
  timeLineChart: baseChart.merge(timeLineChart)
  // multiTimeLineChart: new Playbook(multiTimeLineChart)
}

const AVAILABLE_CHARTS = Object.keys(PLAYBOOKS)

module.exports = {AVAILABLE_CHARTS, PLAYBOOKS}
