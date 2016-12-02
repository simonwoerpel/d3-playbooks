import {max} from '../../d3_packages.js'

export default function({
  data,
  xCol,
  yCol
}) {
  const col = this.col === 'y' ? yCol : xCol
  return [this.min, max(data, d => d[col])]
}
