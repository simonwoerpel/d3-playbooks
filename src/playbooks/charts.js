import scatterChart from './scatter_chart.js'
import barChart from './bar_chart.js'
import lineChart from './line_chart.js'
import multiLineChart from './multiline_chart.js'
import timeLineChart from './timeline_chart.js'
import multiTimeLineChart from './multitimeline_chart.js'
import Playbook from './base_playbook.js'

const PLAYBOOKS = {
  barChart: new Playbook(barChart),
  scatterChart: new Playbook(scatterChart),
  lineChart: new Playbook(lineChart),
  multiLineChart: new Playbook(multiLineChart),
  timeLineChart: new Playbook(timeLineChart),
  multiTimeLineChart: new Playbook(multiTimeLineChart)
}

const AVAILABLE_CHARTS = Object.keys(PLAYBOOKS)

module.exports = {AVAILABLE_CHARTS, PLAYBOOKS}
