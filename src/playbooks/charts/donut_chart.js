import getOrdinalDomain from '../../utils/domains/get_ordinal_domain.js'
import getMaxDomain from '../../utils/domains/get_max_domain.js'
import getScale from '../../utils/scales/get_scale.js'
import drawDonut from '../../utils/draw/donut.js'

const pi = Math.PI

export default {
  plays: {
    getXDomain: getOrdinalDomain,
    getYDomain: getMaxDomain.bind({col: 'y', min: 0}),
    getXScale: getScale.bind({kind: 'scaleOrdinal'}),
    drawData: drawDonut,
  },
  defaults: {
    width: 600,
    height: 600,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    showXAxis: false,
    showYAxis: false,
    xTransform: d => d,
    yRange: [0, 100],
    arcWidth: 0.6,
    arcPadding: 0.02,
    pie: d3.pie(),
    arc: d3.arc(),
    getRadius: (width, height) => Math.min(width, height) / 2,
    getTranslate: (width, height) => [width / 2, height / 2]
  }
}
