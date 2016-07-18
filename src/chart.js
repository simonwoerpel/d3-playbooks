import getData from './loader.js'
import initSvg from './utils/d3/init_svg.js'
import addSvgEvents from './utils/d3/add_svg_events.js'
import updateSvg from './utils/d3/update_svg.js'
import updateElement from './utils/update_element.js'
import getChartElement from './utils/get_chart_element.js'
import {PLAYBOOKS} from './playbooks/charts.js'
import Settings from './playbooks/defaults.js'
import setUpResponsiveness from './utils/setup_responsiveness.js'
import updateDimensions from './utils/update_dimensions.js'
import getTooltipTemplate from './utils/get_tooltip_template.js'
import mountRiotTooltip from './utils/mount_riot_tooltip.js'
import getSearchFunc from './utils/get_search_func.js'
import mountRiotSearchbox from './utils/mount_riot_searchbox.js'
import getLegendItems from './utils/get_legend_items.js'
import mountRiotLegend from './utils/mount_riot_legend.js'
import mountRiotAnnotation from './utils/mount_riot_annotation.js'
import ChartStore from './stores/chart_store.js'

/**
 * available opts:
 *
 * @param {string} elementId - id of html element,
 *    if this element doesn't exist, it will be created
 * @param {string} kind - kind of chart,
 *    check `AVAILABLE_CHARTS` from `./playbooks/charts.js`
 * @param {string} dataUrl - url to csv file, will be loaded via `PapaParse`
 * @param {number} width - overall width of chart svg
 * @param {number} height - overall height of chart svg
 * @param {string} xCol - csv column for x-Axis
 * @param {string} yCol - csv column for y-Axis
 * @param {string} sizeCol - csv column for calculating dot size (for `scatterChart`)
 * @param {object} tooltip – `headTempl` or `labelCol` and optional `bodyTempl` for tooltip rendering
 *
 **/
export default class {

  constructor(opts) {
    opts = Settings(opts)
    for (let prop in opts) {
      this[prop] = opts[prop]
    }

    // start getting async data as soon as possible
    this.data = getData(this)

    // flux like store implemention but instanciated for this chart
    this.control = new ChartStore()

    this._setupPlaybook()

    this._init()
  }

  render() {
    this.data.then(data => {
      this.data = data
      this.playbook.run(this)
      this.search ? this._setupSearch() : null
      this.legend ? this._initLegend() : null
      this.control.trigger(riot.EVT.chartDrawed, this.drawedSelection)
    })
  }

  resize() {
    let doResize = updateDimensions(this)
    if (doResize) {
      updateElement(this)
      updateSvg(this)
      this.playbook.reRender(this)
      this.control.trigger(riot.EVT.chartDrawed, this.drawedSelection)
    }
  }

  _init() {

    // fix dimensions
    let {
      height,
      width,
      wrapperWidth,
      wrapperHeight,
      margin
    } = this

    this.wrapperWidth = wrapperWidth < width ? width : wrapperWidth
    this.wrapperHeight = wrapperHeight < height ? height : wrapperHeight

    this.height = height - margin.top - margin.bottom
    this.width = width - margin.left - margin.right

    this.xTicksRatio = this.xTicks / this.width
    this.yTicksRatio = this.yTicks / this.height

    if (this.responsive) {
      this._setupResponsiveness()
    }

    this.element = getChartElement(this)
    let {svgEl, svg} = initSvg(this)
    this.svg = svg
    this.svgEl = svgEl

    if (this.tooltip) {
      this._initTooltip()
    }

    if (this.annotation) {
      this._initAnnotation()
    }

    if (this.clearSvg) {
      addSvgEvents(this)
    }

  }

  _setupResponsiveness() {
    setUpResponsiveness(this)
    window.addEventListener('resize', this.resize.bind(this))
    // maybe we have already a smaller window than the given values:
    updateDimensions(this)
  }

  _setupPlaybook() {
    this.playbook = PLAYBOOKS[this.kind].merge(this.playbook)
  }

  _initTooltip() {
    // FIXME
    if (typeof(this.tooltip) === 'boolean') {
      this.tooltip = {}
    }
    this.tooltip.template = getTooltipTemplate(this)
    mountRiotTooltip(this)
  }

  _initLegend() {
    // FIXME
    if (typeof(this.legend) === 'boolean') {
      this.legend = {}
    }
    this.legend.legendItems = getLegendItems(this)
    mountRiotLegend(this)
  }

  _initAnnotation() {
    mountRiotAnnotation(this)
  }

  _setupSearch() {
    this.search.doSearch = getSearchFunc(this)
    mountRiotSearchbox(this)
  }
}
