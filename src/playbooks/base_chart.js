import Immutable from 'immutable'

import getData from '../loader.js'
import getChartElement from '../utils/get_chart_element.js'
import updateElement from '../utils/update_element.js'
import fixDimensions from '../utils/fix_dimensions.js'
import initSvg from '../utils/d3/init_svg.js'
import initG from '../utils/d3/init_g.js'
import getExtentDomain from '../utils/d3/get_extent_domain.js'
import getScale from '../utils/d3/get_scale.js'
import getAxis from '../utils/d3/get_axis.js'
import renderAxis from '../utils/d3/render_axis.js'
import renderAxisLabel from '../utils/d3/render_axis_label.js'
import drawExtra from '../utils/d3/draw_extra.js'
import getColor from '../utils/d3/get_color.js'
import getSize from '../utils/d3/get_size.js'

export default Immutable.Map({
  getData: getData,
  getChartElement: getChartElement,
  fixDimensions: fixDimensions,
  updateElement: updateElement,
  initSvg: initSvg,
  initG: initG,
  getXDomain: getExtentDomain.bind({col: 'xCol'}),
  getYDomain: getExtentDomain.bind({col: 'yCol'}),
  getXScale: getScale.bind({axis: 'x'}),
  getYScale: getScale.bind({axis: 'y'}),
  getXAxis: getAxis.bind({kind: 'axisBottom', axis: 'x'}),
  getYAxis: getAxis.bind({kind: 'axisLeft', axis: 'y'}),
  renderXAxis: renderAxis.bind({cssClasses: 'x axis'}),
  renderYAxis: renderAxis.bind({axis: 'y', cssClasses: 'y axis'}),
  renderXLabel: renderAxisLabel.bind({axis: 'x'}),
  renderYLabel: renderAxisLabel.bind({axis: 'y'}),
  drawExtra: drawExtra,
  getColor: getColor,
  getSize: getSize
})
