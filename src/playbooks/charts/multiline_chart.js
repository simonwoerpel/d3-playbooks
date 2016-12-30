import getMultiData from '../../utils/data/get_multi_data.js'
import getMultiDomain from '../../utils/domains/get_multi_domain.js'
import drawMultiLine from '../../utils/draw/multiline.js'

export default {
  plays: {
    getMultiData: getMultiData,
    getYDomain: getMultiDomain,
    drawData: drawMultiLine
  }
}
