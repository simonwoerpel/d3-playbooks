import getOrdinalDomain from '../../utils/domains/get_ordinal_domain.js'
import getMaxDomain from '../../utils/domains/get_max_domain.js'
import getScale from '../../utils/scales/get_scale.js'
import drawHorizontalBars from '../../utils/draw/horizontal_bars.js'

export default {
  plays: {
    getYDomain: getOrdinalDomain.bind({col: 'y'}),
    getXDomain: getMaxDomain.bind({col: 'x', min: 0}),
    getYScale: getScale.bind({kind: 'scaleBand', axis: 'y'}),
    drawData: drawHorizontalBars
  },
  defaults:  {
    yTransform: d => d,
    barMargin: 0,
    barWidth: false
  }
}
