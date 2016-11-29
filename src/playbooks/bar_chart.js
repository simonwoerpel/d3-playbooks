import getOrdinalDomain from '../utils/d3/get_ordinal_domain.js'
import getMaxDomain from '../utils/d3/get_max_domain.js'
import getScale from '../utils/d3/get_scale.js'
import drawBars from '../utils/d3/draw/bars.js'

export default {
  getXDomain: getOrdinalDomain.bind({col: 'x'}),
  getYDomain: getMaxDomain.bind({col: 'y', min: 0}),
  getXScale: getScale.bind({kind: 'scaleBand'}),
  drawData: drawBars
}
