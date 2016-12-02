import {select} from '../../d3_packages.js'

/**
 * return element to which a chart will be applied.
 * if element not in `document`, it will be created
 *
 * @param {string} elementId - id of html element
 * @param {string} cssNamespace
 **/
export default ({
  elementId,
  cssNamespace
}) => {
  let element = select('#'+elementId)
  if (element.empty()) {
    element = select('body')
      .append('div')
      .attr('id', elementId)
  }

  return element.append('div')
    .attr('class', cssNamespace + ' ' + cssNamespace + '__wrapper')
}
