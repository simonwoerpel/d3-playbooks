import Immutable from 'immutable'

import getData from '../loader.js'
import getChartElement from '../lib/setup/get_chart_element.js'
import fixDimensions from '../lib/setup/fix_dimensions.js'
import updateDimensions from '../lib/responsive/update_dimensions.js'
import getBreakpoints from '../lib/responsive/get_breakpoints.js'
import setUpResponsiveness from '../lib/responsive/setup_responsiveness.js'
import initSvg from '../utils/d3/init_svg.js'
import updateSvg from '../lib/responsive/update_svg.js'
import initG from '../utils/d3/init_g.js'
import getExtentDomain from '../utils/d3/get_extent_domain.js'
import getScale from '../utils/d3/get_scale.js'
import getAxis from '../utils/d3/get_axis.js'
import renderAxis from '../utils/d3/render_axis.js'
import renderAxisLabel from '../utils/d3/render_axis_label.js'
import getColorFunc from '../utils/d3/get_color.js'
import getSizeFunc from '../utils/d3/get_size.js'
import updateBreakpoints from '../lib/responsive/update_breakpoints.js'
import updateBreakpointClasses from '../lib/responsive/update_breakpoint_classes.js'

export default Immutable.Map({
  getData: getData,
  getChartElement: getChartElement,
  fixDimensions: fixDimensions,
  updateDimensions: updateDimensions,
  setUpResponsiveness: setUpResponsiveness,
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
  getColorFunc: getColorFunc,
  getSizeFunc: getSizeFunc,
  getBreakpoints: getBreakpoints,
  updateBreakpoints: updateBreakpoints,
  updateBreakpointClasses: updateBreakpointClasses,
  updateSvg: updateSvg
})
