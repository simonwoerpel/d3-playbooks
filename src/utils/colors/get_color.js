/** compute getColor func
 *
 * @param color -
 *  a string, everything gets the same color
 *  an Array, this will compute a d3 scaleOrdinal to get the color (e.g. for group based data)
 *  a mapping (object), the color for the given value will be returned
 *  a callable - will just return as is
**/
export default ({
  color,
  groupCol,
  xCol
}) => {

  if (typeof color === 'string') return () => color

  else if (Array.isArray(color)) {
    const _getColor = d3.scaleOrdinal(color)
    return d => _getColor(d[groupCol] || d[xCol] || d.index || d)
  }

  else if (color.constructor === Object) {
    if (!groupCol) {
      throw new Error('need groupCol for this color func')
    }
    return d => color[d[groupCol] || d[xCol]]
  }

  else if (typeof color === 'function') return color

  else {
    throw new Error('can\'t compute color function from '+color)
  }
}
