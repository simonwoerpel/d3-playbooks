import {line, curveNatural} from '../../d3_packages.js'

export default ({
  curve,
  multiData,
  xCol,
  yCols,
  xScale,
  yScale,
  g,
  getColor,
  yDomain
}) => {

  const {xValues, yValues} = multiData

  const _line = line()
    .x((d, i) => xScale(xValues[i]))
    .y(yScale)

  if (curve) {
    _line.curve(curveNatural)
  }

  return g.selectAll('.line')
      .data(yValues)
    .enter().append('path')
      .attr('class', 'line')
      .attr('d', _line)
      .style('stroke', d => getColor(d))
}
