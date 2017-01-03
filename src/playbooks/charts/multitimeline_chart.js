import getMultiData from '../../utils/data/get_multi_data.js'
import getMultiDomain from '../../utils/domains/get_multi_domain.js'
import getScale from '../../utils/scales/get_scale.js'
import drawMultiLine from '../../utils/draw/multiline.js'

export default {
  plays: {
    getMultiData: getMultiData,
    getYDomain: getMultiDomain,
    getXScale: getScale.bind({kind: 'scaleTime'}),
    drawData: drawMultiLine
  },
  defaults: {
    yTransforms: {},
    timeFormat: '%Y-%m-%d %H:%M:%S'
  }
}
