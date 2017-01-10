// init svg the first time
// @return svg as wrapper svg element (use for resizing if responsive)
export default ({
  element,
  width,
  height,
  margin,
  containerWidth,
  containerHeight,
  responsiveSvg,
  cssNamespace
}) => {
  const svg = element.append('svg')

  if (responsiveSvg) {
    const {top, right, bottom, left} = margin
    const viewBox = width + left + right + ' ' + (height + top + bottom)
    svg
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + viewBox)
      //class to make it responsive
      .attr('class', 'svg-content-responsive')
    element.classed('svg-container-responsive', true)
  } else {
    svg
      .attr('width', containerWidth)
      .attr('height', containerHeight)
  }
  return svg.classed(cssNamespace + '__svg', true)
}
