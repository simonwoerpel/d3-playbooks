import {extent, min, max} from '../../d3_packages.js'

export default function({
  multiData,
  yExtend
}) {
  const extents = []
  multiData.yValues.forEach(v => {
    extent(v).forEach(e => extents.push(e))
  })
  return yExtend || extent(extents)
}
