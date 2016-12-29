import getOrdinalDomain from '../lib/domains/get_ordinal_domain.js'
import getMaxDomain from '../lib/domains/get_max_domain.js'
import getScale from '../lib/scales/get_scale.js'
import drawBars from '../lib/draw/bars.js'

export default {
  plays: {
    xTransform: d => d,
    getXDomain: getOrdinalDomain.bind({col: 'x'}),
    getYDomain: getMaxDomain.bind({col: 'y', min: 0}),
    getXScale: getScale.bind({kind: 'scaleBand'}),
    drawData: drawBars
  },
  defaults:  {
    barMargin: 0,
    barWidth: false
  }
}
