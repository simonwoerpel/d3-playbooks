export default ({
  curve,
  multiData,
  xCol,
  yCols,
  xScale,
  yScale,
  svg,
  getColor,
  yDomain
}) => {
  const {xValues, yValues} = multiData

  const line = d3.line()
    .x((d, i) => xScale(xValues[i]))
    .y(yScale)

  if (curve) {
    line.curve(d3.curveNatural)
  }

  return svg.selectAll('.line')
      .data(yValues)
    .enter().append('path')
      .attr('class', 'line')
      .attr('d', line)
      .style('stroke', d => getColor(d))
}
