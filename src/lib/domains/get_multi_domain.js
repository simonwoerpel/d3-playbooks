export default function({
  multiData,
  yExtend
}) {
  const extents = []
  multiData.yValues.forEach(v => {
    d3.extent(v).forEach(e => extents.push(e))
  })
  return yExtend || d3.extent(extents)
}
