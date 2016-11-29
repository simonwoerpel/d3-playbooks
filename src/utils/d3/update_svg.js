export default function({
  svg,
  g,
  width,
  height,
  margin
}) {
  // update svg dimensions
  svg
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  // remove all children to redraw chart with new dimensions
  g
    .selectAll('*').remove()
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}
