import getMultiData from '../lib/data/get_multi_data.js'
import getMultiDomain from '../lib/domains/get_multi_domain.js'
import getScale from '../lib/scales/get_scale.js'
import drawMultiLine from '../lib/draw/multiline.js'

export default {
  plays: {
    getMultiData: getMultiData,
    getYDomain: getMultiDomain,
    getXScale: getScale.bind({kind: 'scaleTime'}),
    drawData: drawMultiLine
  },
  defaults: {
    timeFormat: '%Y-%m-%d %H:%M:%S'
  }
}
