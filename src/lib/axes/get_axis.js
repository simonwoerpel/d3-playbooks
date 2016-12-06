const {axisLeft, axisRight, axisTop, axisBottom} = d3
const axes = {
  axisTop,
  axisBottom,
  axisRight,
  axisLeft
}

export default function({
  xScale,
  yScale
}) {
  let scale = this.axis === 'y' ? yScale : xScale
  let axis = axes[this.kind] || axisBottom
  return axis(scale)
}
