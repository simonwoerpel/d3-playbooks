export default ({
  width,
  height,
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
  getRadius,
  getTranslate
}) => {

  const radius = getRadius(width, height)

  const arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius - radius * arcWidth)
      .padAngle(arcPadding)

  const arcs = pie(data.map(d => yScale(d[yCol])))

  const [x, y] = getTranslate(width, height)
  return g.attr('transform', 'translate(' + x + ',' + y + ')')
    .selectAll('.arc')
      .data(arcs)
    .enter().append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .style('fill', d => getColor(d))
}
