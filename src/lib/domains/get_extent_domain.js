import {extent} from '../../d3_packages.js'

export default function({
  data,
  xCol,
  yCol,
  xExtend,
  yExtend
}) {
  const y = this.col === 'yCol'
  const col = y ? yCol : xCol
  const _extend = y ? yExtend : xExtend
  return _extend || extent(data, d => d[col])
}
