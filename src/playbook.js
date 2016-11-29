import {OrderedMap as _} from 'immutable'

export default _({
  init: _({
    data: 'getData',
    element: 'getChartElement',
    _dimensions: 'fixDimensions',
    _update: 'updateElement',
    svg: 'initSvg',
    g: 'initG'
  }),
  setup: _({
    getColor: 'getColor',
    getSize: 'getSize',
    xDomain: 'getXDomain',
    yDomain: 'getYDomain',
    xScale: 'getXScale',
    yScale: 'getYScale',
    xAxis: 'getXAxis',
    yAxis: 'getYAxis'
  }),
  draw: _({
    renderedXAxis: 'renderXAxis',
    renderedYAxis: 'renderYAxis',
    renderedXLabel: 'renderXLabel',
    renderedYLabel: 'renderYLabel',
    drawedSelection: 'drawData',
    extraDrawedSelections: 'drawExtra'
  })
})
