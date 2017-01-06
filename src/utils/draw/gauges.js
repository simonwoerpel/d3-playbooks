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
  pie
}) => {

  const radius = Math.min(width, height)

  const arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius - radius * arcWidth)
      .padAngle(arcPadding)

  const arcs = pie(data.map(d => yScale(d[yCol])))

  return g.attr('transform', 'translate(' + width / 2 + ',' + height + ')')
    .selectAll('.arc')
      .data(arcs)
    .enter().append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .style('fill', d => getColor(d))
}
