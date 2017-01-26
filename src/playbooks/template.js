/*
 * top-level keys: name of public method to chart object that can be called
 *
 * key-value-pairs inside these:
 *  methods that are called when calling the top-level one
 *
 *  key: name of property of the internal chart object that gets the
 *  return value of this function assigned
 *
 *  keys starting with an underscore are not assigned because the methods don't return anything
 *
 *  value: property of the internal chart object that holds the corresponding method
 *
 * each method gets the internal chart object as first argument and an (optional) options-object as second.
 */
export default {
  init: {
    rawData: 'getData',
    ready: 'getReady',
    element: 'getChartElement',
    _responsive: 'setUpResponsiveness',
    _updateDimensions: 'updateDimensions',
    breakpoints: 'getBreakpoints',
    _updateBreakpoints: 'updateBreakpoints',
    _updateBreakpointClasses: 'updateBreakpointClasses',
    svg: 'initSvg',
    g: 'initG'
  },
  setupData: {
    data: 'prepareData',
    multiData: 'getMultiData',  // FIXME
  },
  setup: {
    getColor: 'getColorFunc',
    getSize: 'getSizeFunc',
    xDomain: 'getXDomain',
    yDomain: 'getYDomain'
  },
  prepareDraw: {
    xScale: 'getXScale',
    yScale: 'getYScale',
    xAxis: 'getXAxis',
    yAxis: 'getYAxis'
  },
  draw: {
    drawedSelection: 'drawData',
    renderedXAxis: 'renderXAxis',
    renderedYAxis: 'renderYAxis',
    renderedXLabel: 'renderXLabel',
    renderedYLabel: 'renderYLabel',
    extraDrawedSelections: 'drawExtra'
  },
  render: [
    'setupData',
    'setup',
    'prepareDraw',
    'draw'
  ],
  resize: [
    'updateBreakpoints',
    'updateBreakpointClasses',
    'updateSvg',
    'resetG',
    'prepareDraw',
    'draw'
  ],
  update: [
    'setup',
    'updateSvg',
    'resetG',
    'prepareDraw',
    'draw'
  ]
}
