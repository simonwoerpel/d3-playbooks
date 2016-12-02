import {line, curveNatural} from '../../../d3_packages.js'

export default function({
  curve,
  multiData,
  xCol,
  yCols,
  xScale,
  yScale,
  svg,
  getColor,
  yDomain
}) {

  let {xValues, yValues} = multiData

  let _line = line()
    .x((d, i) => xScale(xValues[i]))
    .y(yScale)

  if (curve) {
    _line.curve(curveNatural)
  }

  return svg.selectAll('.line')
      .data(yValues)
    .enter().append('path')
      .attr('class', 'line')
      .attr('d', _line)
      .style('stroke', d => getColor(d))
}
