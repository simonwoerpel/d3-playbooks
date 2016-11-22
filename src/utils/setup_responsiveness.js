export default (chart) => {
  // setup size ratio, preserve original values
  const {
    width,
    height,
    wrapperWidth,
    wrapperHeight,
    margin
  } = chart

  const {
    top,
    right,
    bottom,
    left
  } = margin

  chart._originHeight = height
  chart._originWidth = width

  // setup ratio funcs

  chart._svgWidthRatio = (width + left + right) / wrapperWidth

  const wFix = chart.margin.left + chart.margin.right
  chart._getSvgWidth = (wrapperWidth) => {
    return parseInt(wrapperWidth * chart._svgWidthRatio) - wFix
  }

  chart._svgHeightRatio = (height + top + bottom) / wrapperHeight

  const hFix = chart.margin.top + chart.margin.bottom
  chart._getSvgHeight = (wrapperHeight) => {
    return parseInt(wrapperHeight * chart._svgHeightRatio) - hFix
  }

  chart._wrapperSizeRatio = wrapperHeight / wrapperWidth
  chart._originWrapperWidth = wrapperWidth
  chart._originWrapperHeight = wrapperHeight

  chart._getWrapperHeight = (wrapperWidth) => {
    return parseInt(wrapperWidth * chart._wrapperSizeRatio)
  }
}
