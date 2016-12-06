import {extent, min, max} from '../../d3_packages.js'

export default function({
  multiData,
  yExtent
}) {
  const extents = []
  multiData.yValues.forEach(v => {
    extent(v).forEach(e => extents.push(e))
  })
  return yExtent || extent(extents)
}
