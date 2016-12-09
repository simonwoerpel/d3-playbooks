import getScale from '../lib/scales/get_scale.js'
import drawLine from '../lib/draw/line.js'

export default {
  plays: {
    getXScale: getScale.bind({kind: 'scaleTime'}),
    drawData: drawLine
  },
  defaults: {
    timeFormat: '%Y-%m-%d %H:%M:%S'
  }
}
