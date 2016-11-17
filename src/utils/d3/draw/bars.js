export default function({
  height,
  data,
  xCol,
  yCol,
  xScale,
  yScale,
  svg,
  getColor,
  barMargin,
  barWidth
}) {

  const bandWith = barWidth ? xScale.bandwidth() * barWidth : xScale.bandwidth() - barMargin
  // FIXME make bars real center

  return svg.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', this.cssClasses || 'bar')
    .attr('x', d => {
      return xScale(d[xCol]) + barMargin  // FIXME
    })
    .attr('width', bandWith)
    .attr('y', d => {
      return yScale(d[yCol])
    })
    .attr('height', d => {
      return height - yScale(d[yCol])
    })
    .style('fill', d => {
      return getColor(d)
    })
}
