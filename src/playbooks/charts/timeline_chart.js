import getScale from '../../utils/scales/get_scale.js'
import drawLine from '../../utils/draw/line.js'

export default {
  plays: {
    getXScale: getScale.bind({kind: 'scaleTime'}),
    drawData: drawLine
  },
  defaults: {
    timeFormat: '%Y-%m-%d %H:%M:%S'
  }
}
