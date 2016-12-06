import getScale from '../lib/scales/get_scale.js'
import drawLine from '../lib/draw/line.js'

export default {
  getXScale: getScale.bind({kind: 'scaleTime'}),
  drawData: drawLine,
}