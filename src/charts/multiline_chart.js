import getMultiData from '../lib/data/get_multi_data.js'
import getMultiDomain from '../lib/domains/get_multi_domain.js'
import drawMultiLine from '../lib/draw/multiline.js'

export default {
  plays: {
    getMultiData: getMultiData,
    getYDomain: getMultiDomain,
    drawData: drawMultiLine
  }
}
