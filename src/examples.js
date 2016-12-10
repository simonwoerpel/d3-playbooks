import renderChart from './render_chart.js'

console.log(d3)

export default () => {
  renderChart({
      kind: 'barChart',
      elementId: 'bar-simple',
      dataUrl: 'data/bar.csv'
  })

  renderChart({
      kind: 'lineChart',
      elementId: 'line-simple',
      dataUrl: 'data/line.csv'
  })

  renderChart({
      kind: 'scatterChart',
      elementId: 'scatter-simple',
      dataUrl: 'data/scatter.csv'
  })

  renderChart({
      kind: 'timeLineChart',
      elementId: 'timeline-simple',
      dataUrl: 'data/timeline.csv'
  })

  renderChart({
      kind: 'multiLineChart',
      elementId: 'multiline-simple',
      dataUrl: 'data/multiline.csv',
      legend: true,
      yCols: ['y1', 'y2', 'y3']
  })

  renderChart({
      kind: 'multiTimeLineChart',
      elementId: 'multitimeline-simple',
      dataUrl: 'data/multitimeline.csv',
      yCols: ['count_clinton', 'count_trump'],
      legend: true,
      timeFormat: '%Y-%m-%d %H:%M:%S'
  })
}
