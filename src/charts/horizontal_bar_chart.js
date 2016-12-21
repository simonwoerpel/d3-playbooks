import getOrdinalDomain from '../lib/domains/get_ordinal_domain.js'
import getMaxDomain from '../lib/domains/get_max_domain.js'
import getScale from '../lib/scales/get_scale.js'
import drawHorizontalBars from '../lib/draw/horizontal_bars.js'

export default {
  plays: {
    getYDomain: getOrdinalDomain.bind({col: 'y'}),
    getXDomain: getMaxDomain.bind({col: 'x', min: 0}),
    getYScale: getScale.bind({kind: 'scaleBand', axis: 'y'}),
    drawData: drawHorizontalBars
  },
  defaults:  {
    barMargin: 0,
    barWidth: false
  }
}
