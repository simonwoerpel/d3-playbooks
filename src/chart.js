import setupPlaybook from './playbooks/generate.js'
import playbook from './playbook.js'

import transformMulti from './utils/data/transform_multi.js'
import updateSvg from './utils/d3/update_svg.js'
import updateElement from './utils/update_element.js'
import {PLAYBOOKS} from './playbooks/charts.js'
import Settings from './playbooks/defaults.js'
import setUpResponsiveness from './utils/setup_responsiveness.js'
import updateBreakpoints from './utils/update_breakpoints.js'
import getBreakpoints from './utils/get_breakpoints.js'
import updateDimensions from './utils/update_dimensions.js'

/**
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
 * @param {number} wrapperWidth - width of wrapper element, default at least `width`
 * @param {number} wrapperHeight - height of wrapper element, default at least `height`
 * @param {string} cssNamespace - css class namespace, default 'd3-playbooks#
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
 * @param {function} drawExtra - function or array of functions to apply on the svg to draw some extra stuff
 * @param {array} sizeRange - for scatters: smallest and biggest circle radius
 * @param {number} size - for scatters: fixed circle radius
 *
 **/
export default class {

  constructor(opts) {
    opts = Settings(opts)

    for (let prop in opts) {
      this[prop] = opts[prop]
    }

    this._setupPlaybook()
    this.init()
  }

  render() {
    this.data.then(data => {
      this.data = data

      // FIXME this is not elegant at all, at least at this point here
      if (this.kind.startsWith('multi')) {
        this.multiData = transformMulti(this)
      }
      this._render()
    })
  }

  _render() {
    this.setup()
    this.draw()
  }

  resize() {
    let doResize = updateDimensions(this)
    if (doResize) {
      updateBreakpoints(this)
      updateElement(this)
      updateSvg(this)
      this.playbook.reRender(this)
    }
  }

  _setupResponsiveness() {
    // this.xTicksRatio = this.xTicks / this.width
    // this.yTicksRatio = this.yTicks / this.height
    setUpResponsiveness(this)

    // initial conversion of breakpoint object into array
    this.breakpoints = getBreakpoints(this)

    this._setupTicks()

    window.addEventListener('resize', this.resize.bind(this))
    // maybe we have already a smaller window than the given values:
    updateDimensions(this)
    updateBreakpoints(this)
  }

  _setupPlaybook() {
    setupPlaybook({
      chart: this,
      playbook: playbook,
      playbookFuncs: PLAYBOOKS[this.kind]
    })
  }
}
