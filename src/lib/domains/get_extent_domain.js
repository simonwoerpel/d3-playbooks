import {extent} from '../../d3_packages.js'

export default function({
  data,
  xCol,
  yCol,
  xExtent,
  yExtent
}) {
  const y = this.col === 'yCol'
  const col = y ? yCol : xCol
  const _extent = y ? yExtent : xExtent
  return _extent || extent(data, d => d[col])
}
