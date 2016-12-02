import {line, curveNatural} from '../../d3_packages.js'

export default function({
  curve,
  data,
  xCol,
  yCol,
  xScale,
  yScale,
  g,
  getColor
}) {
  const _line = line()
    .x(d => xScale(d[xCol]))
    .y(d => yScale(d[yCol]))

  if (curve) {
    _line.curve(curveNatural)
  }

  return g.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', _line)
      .style('stroke', d => getColor(d))
}
