export default function({
  height,
  data,
  xCol,
  yCol,
  xScale,
  yScale,
  g,
  getColor,
  barMargin,
  barWidth
}) {
  // FIXME make bars real center ???
  const bandWith = barWidth ? xScale.bandwidth() * barWidth : xScale.bandwidth() - barMargin
  return g.selectAll('.bar')
      .data(data)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d[xCol]) + barMargin)
      .attr('width', bandWith)
      .attr('y', d => yScale(d[yCol]))
      .attr('height', d => height - yScale(d[yCol]))
      .style('fill', d => getColor(d))
}
