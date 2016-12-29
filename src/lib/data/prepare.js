/*
 * prepare x / y data based on transform funcs
 */
export default ({
  rawData,
  xCol,
  yCol,
  xTransform,
  yTransform
}) => {
  return rawData.map(d => {
    d[xCol] = xTransform(d[xCol])
    d[yCol] = yTransform(d[yCol])
    return d
  })
}
