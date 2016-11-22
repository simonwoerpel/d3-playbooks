import {line, curveNatural} from '../../../d3_packages.js'

export default function({
  curve,
  multiData,
  xScale,
  yScale,
  svg,
  getColor
}) {

  const {xValues, yValues} = multiData

  const _line = line()
    .x((d, i) => {
      return xScale(xValues[i])
    })
    .y(yScale)

  if (curve) {
    _line.curve(curveNatural)
  }

  return svg.selectAll('.line')
      .data(yValues)
    .enter().append('path')
      .attr('class', 'line')
      .attr('d', _line)
      .style('stroke', d => {
        return getColor(d)
      })
}
