import {Map} from 'immutable'
import {schemeCategory10} from '../d3_packages.js'

const DEFAULTS = Map({
  width: 800,
  height: 500,
  cssNamespace: 'd3-playbooks',
  margin: Map({
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
  }),
  showXAxis: true,
  showYAxis: true,
  showXLabel: true,
  showYLabel: true,
  xCol: 'x',
  yCol: 'y',
  yCols: false,
  xScaleNice: true,
  yScaleNice: true,
  responsive: true,
  responsiveSvg: false,
  xTicks: 10,
  yTicks: 10,
  curve: false,
  color: schemeCategory10,
  barMargin: 0,
  barWidth: false,
  timeFormat: false,
  filter: false,
  drawExtra: c => undefined,
  sizeRange: [3, 8],
  size: 6,
  breakpoints: Map({
    small: 480,
    medium: 768,
    large: 1280
  }),
})

export default opts => DEFAULTS.merge(opts).toJS()
