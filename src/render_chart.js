import {AVAILABLE_CHARTS} from './playbooks/charts.js'
import Chart from './chart.js'

/**
 * generates the chart and puts it into given html selector
 *
 * available opts:
 *
 * see `playbooks/defaults.js` for defaults
 *
 * @param {string} elementId - id of html element,
 *    if this element doesn't exist, it will be created
 * @param {string} kind - kind of chart,
 *    check `AVAILABLE_CHARTS` from `./playbooks/charts.js`
 * @param {string} dataUrl - url to csv file, will be loaded via `PapaParse`
 * @param {number} width - overall width of chart svg
 * @param {number} height - overall height of chart svg
 * @param {string} cssNamespace - css class namespace, default 'd3-playbooks'
 * @param {object} margin - margins for svg chart element
 * @param {string} xCol - csv column for x-Axis
 * @param {string} yCol - csv column for y-Axis
 * @param {boolean} showXAxis - whether to render x-Axis or not
 * @param {boolean} showYAxis - whether to render y-Axis or not
 * @param {boolean} xScaleNice - whether to call `.nice()` on xScale or not
 * @param {boolean} yScaleNice - whether to call `.nice()` on yScale or not
 * @param {boolean} responsive - whether to resize chart on window/container resize or not
 * @param {boolean} responsiveSvg - whether to use `preserveAspectRatio` on svg or not
 * @param {number} xTicks - how many ticks the x-Axis should have (reduced on smaller windows)
 * @param {number} yTicks - how many ticks the y-Axis should have (reduced on smaller windows)
 * @param {object, function, array, string} color - a color function, mapping, array or a single string value
 * @param {function} filter - a filter function that will be applied to each row while loading data
 * @param {string} sizeCol - csv column for calculating dot size (for `scatterChart`)
 * @param {function} drawExtra - function to apply to draw some extra stuff
 * @param {array} sizeRange - for scatters: smallest and biggest circle radius
 * @param {number} size - for scatters: fixed circle radius
 *
 **/
export default opts => {
  // check for implementation
  if (AVAILABLE_CHARTS.indexOf(opts.kind) == -1) {
    throw new Error('chart type not implemented')
  }

  const chart = Chart(opts)
  chart.build()
}
