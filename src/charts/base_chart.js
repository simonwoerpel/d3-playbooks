import {schemeCategory10} from '../d3_packages.js'

import getData from '../lib/data/loader.js'
import getChartElement from '../lib/setup/get_chart_element.js'
import fixDimensions from '../lib/setup/fix_dimensions.js'
import updateDimensions from '../lib/responsive/update_dimensions.js'
import getBreakpoints from '../lib/responsive/get_breakpoints.js'
import setUpResponsiveness from '../lib/responsive/setup_responsiveness.js'
import initSvg from '../lib/setup/init_svg.js'
import initG from '../lib/setup/init_g.js'
import updateSvg from '../lib/responsive/update_svg.js'
import getExtentDomain from '../lib/domains/get_extent_domain.js'
import getScale from '../lib/scales/get_scale.js'
import getAxis from '../lib/axes/get_axis.js'
import renderAxis from '../lib/axes/render_axis.js'
import renderAxisLabel from '../lib/axes/render_axis_label.js'
import getColorFunc from '../lib/colors/get_color.js'
import getSizeFunc from '../lib/sizes/get_size.js'
import updateBreakpoints from '../lib/responsive/update_breakpoints.js'
import updateBreakpointClasses from '../lib/responsive/update_breakpoint_classes.js'

export default {
  plays: {
    getData: getData,
    getMultiData: () => null,  // FIXME
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
  },
  defaults: {
    width: 600,
    height: 400,
    cssNamespace: 'd3-playbooks',
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 30
    },
    showXAxis: true,
    showYAxis: true,
    showXLabel: true,
    showYLabel: true,
    xCol: 'x',
    yCol: 'y',
    xScaleNice: true,
    yScaleNice: true,
    responsive: true,
    responsiveSvg: false,
    xTicks: 10,
    yTicks: 10,
    color: schemeCategory10,
    filter: false,
    drawExtra: c => undefined,
    breakpoints: {
      small: 480,
      medium: 768,
      large: 1280
    }
  }
}
