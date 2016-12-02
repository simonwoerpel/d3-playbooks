export default function({
  svg,
  g,
  containerWidth,
  containerHeight,
  margin
}) {
  // update svg dimensions
  svg
    .attr('width', containerWidth)
    .attr('height', containerHeight)
  // remove all children to redraw chart with new dimensions
  g
    .selectAll('*').remove()
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}
