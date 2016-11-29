import getScale from '../utils/d3/get_scale.js'
import drawLine from '../utils/d3/draw/line.js'

export default {
  getXScale: getScale.bind({kind: 'scaleTime'}),
  drawData: drawLine,
}
