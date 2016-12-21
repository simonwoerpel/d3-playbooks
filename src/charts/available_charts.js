import {fromJS as _} from 'immutable'
import baseChart from './base_chart.js'

import barChart from './bar_chart.js'
import horizontalBarChart from './horizontal_bar_chart.js'
import scatterChart from './scatter_chart.js'
import lineChart from './line_chart.js'
import multiLineChart from './multiline_chart.js'
import timeLineChart from './timeline_chart.js'
import multiTimeLineChart from './multitimeline_chart.js'

const _base = _(baseChart)

const _getPlaybook = o => _base.mergeDeep(_(o))

export default {
  barChart: _getPlaybook(barChart),
  horizontalBarChart: _getPlaybook(horizontalBarChart),
  scatterChart: _getPlaybook(scatterChart),
  lineChart: _getPlaybook(lineChart),
  multiLineChart: _getPlaybook(multiLineChart),
  timeLineChart: _getPlaybook(timeLineChart),
  multiTimeLineChart: _getPlaybook(multiTimeLineChart)
}
