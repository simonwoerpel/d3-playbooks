import baseChart from './base_chart.js'
import getScale from '../utils/d3/get_scale.js'
import addTooltipEventsLine from '../utils/d3/add_tooltip_events_for_line.js'
import drawLine from '../utils/d3/draw/line.js'

export default class extends baseChart {
  constructor() {
    super()
    this.getXScale = getScale.bind({kind: 'scaleTime'})
    this.drawData = drawLine
    this.addEvents = addTooltipEventsLine
  }
}
