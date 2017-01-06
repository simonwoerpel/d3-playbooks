import getMaxDomain from '../../utils/domains/get_max_domain.js'
import drawCircles from '../../utils/draw/circles.js'

export default {
  plays: {
    drawData: drawCircles,
    getXDomain: getMaxDomain.bind({col: 'x', min: 0}),
    getYDomain: getMaxDomain.bind({col: 'y', min: 0}),
  },
  defaults: {
    sizeRange: [3, 8],
    size: 6,
    color: 'steelblue'
  }
}
