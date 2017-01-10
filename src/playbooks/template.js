import {OrderedMap as _} from 'immutable'

export default _({
  init: _({
    rawData: 'getData',
    element: 'getChartElement',
    _responsive: 'setUpResponsiveness',
    _updateDimensions: 'updateDimensions',
    breakpoints: 'getBreakpoints',
    _updateBreakpoints: 'updateBreakpoints',
    _updateBreakpointClasses: 'updateBreakpointClasses',
    svg: 'initSvg',
    g: 'initG'
  }),
  setupData: _({
    data: 'prepareData',
    multiData: 'getMultiData',  // FIXME
  }),
  setup: _({
    getColor: 'getColorFunc',
    getSize: 'getSizeFunc',
    xDomain: 'getXDomain',
    yDomain: 'getYDomain'
  }),
  prepareDraw: _({
    xScale: 'getXScale',
    yScale: 'getYScale',
    xAxis: 'getXAxis',
    yAxis: 'getYAxis'
  }),
  draw: _({
    drawedSelection: 'drawData',
    renderedXAxis: 'renderXAxis',
    renderedYAxis: 'renderYAxis',
    renderedXLabel: 'renderXLabel',
    renderedYLabel: 'renderYLabel',
    extraDrawedSelections: 'drawExtra'
  }),
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
})
