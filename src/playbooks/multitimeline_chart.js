import baseChart from './base_chart.js'
import getMultiDomain from '../utils/d3/get_multi_domain.js'
import getScale from '../utils/d3/get_scale.js'
import drawMultiLine from '../utils/d3/draw/multiline.js'

export default class extends baseChart {
  constructor() {
    super()
    this.getXScale = getScale.bind({kind: 'scaleTime'})
    this.getYDomain = getMultiDomain
    this.drawData = drawMultiLine
  }
}
