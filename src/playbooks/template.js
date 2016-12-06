import {OrderedMap as _} from 'immutable'

export default _({
  init: _({
    data: 'getData',
    multiData: 'getMultiData',  // FIXME
    element: 'getChartElement',
    _responsive: 'setUpResponsiveness',
    _updateDimensions: 'updateDimensions',
    breakpoints: 'getBreakpoints',
    _updateBreakpoints: 'updateBreakpoints',
    _updateBreakpointClasses: 'updateBreakpointClasses',
    svg: 'initSvg',
    g: 'initG'
  }),
  setup: _({
    getColor: 'getColorFunc',
    getSize: 'getSizeFunc',
    xDomain: 'getXDomain',
    yDomain: 'getYDomain'
  }),
  beforeDraw: _({
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
    'setup',
    'beforeDraw',
    'draw'
  ],
  resize: [
    'updateBreakpoints',
    'updateBreakpointClasses',
    'updateSvg',
    'beforeDraw',
    'draw'
  ]
})
