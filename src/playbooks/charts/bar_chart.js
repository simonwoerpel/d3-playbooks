import getOrdinalDomain from '../../utils/domains/get_ordinal_domain.js'
import getMaxDomain from '../../utils/domains/get_max_domain.js'
import getScale from '../../utils/scales/get_scale.js'
import drawBars from '../../utils/draw/bars.js'

export default {
  plays: {
    getXDomain: getOrdinalDomain.bind({col: 'x'}),
    getYDomain: getMaxDomain.bind({col: 'y', min: 0}),
    getXScale: getScale.bind({kind: 'scaleBand'}),
    drawData: drawBars
  },
  defaults:  {
    xTransform: d => d,
    barMargin: 2,
    color: 'steelblue'
  }
}
