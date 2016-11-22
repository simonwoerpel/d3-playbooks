import {select} from '../d3_packages.js'

/**
 * return element to which a chart will be applied.
 * if element not in `document`, it will be created
 *
 * @param {string} elementId - id of html element
 * @param {string} wrapper - wrapper classname (for css and stuff)
 **/
export default ({
  elementId,
  wrapperClass
}) => {
  let parent = select('#'+elementId)
  if (parent.empty()) {
    parent = select('body')
      .append('div')
      .attr('id', elementId)
  }

  // return a child element of the actual element to compute
  // `clientWidth` properly regardless of parent element paddings
  return parent
    .append('div').classed(wrapperClass+'-wrapper', true)
    .append('div').classed(wrapperClass, true)
}
