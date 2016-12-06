const {scaleLinear, scaleOrdinal, scaleBand, scaleTime, scaleLog} = d3

const scales = {
  scaleLinear,
  scaleOrdinal,
  scaleLog,
  scaleBand,
  scaleTime
}

export default function({
  height,
  width,
  xDomain,
  yDomain,
  xScaleNice,
  yScaleNice
}) {
  const _scale = scales[this.kind] || scaleLinear
  const _y = this.axis === 'y'
  const range = _y ? [height, 0] : [0, width]
  const domain = _y ? yDomain : xDomain
  const nice = _y ? yScaleNice : xScaleNice
  const scale = _scale()
    .domain(domain)
    .range(range)

  return nice && (scale.hasOwnProperty('nice')) ? scale.nice() : scale
}
