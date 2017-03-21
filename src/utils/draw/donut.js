export default ({
  width,
  height,
  margin,
  data,
  xCol,
  yCol,
  xScale,
  yScale,
  g,
  getColor,
  arcWidth,
  arcPadding,
  pie,
  arc,
  getRadius,
  getTranslate
}) => {

  const radius = getRadius(width, height)

  arc.outerRadius(radius)
      .innerRadius(radius - radius * arcWidth)
      .padAngle(arcPadding)

  pie.value(d => yScale(d[yCol]))
  const arcs = pie(data)

  const {top, left} = margin
  const [x, y] = getTranslate(width, height)
  return g.attr('transform', 'translate(' + (x + left) + ',' + (y + top) + ')')
    .selectAll('.arc')
      .data(arcs)
    .enter().append('g')
      .attr('class', 'arc-wrapper')
    .append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .style('fill', d => getColor(d))
}
