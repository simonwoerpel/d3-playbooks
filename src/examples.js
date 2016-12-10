export default () => {
  d3.playbooks.barChart({
      elementId: 'bar-simple',
      dataUrl: 'data/bar.csv'
  }).build()

  d3.playbooks.lineChart({
      elementId: 'line-simple',
      dataUrl: 'data/line.csv'
  }).build()

  d3.playbooks.scatterChart({
      elementId: 'scatter-simple',
      dataUrl: 'data/scatter.csv'
  }).build()

  d3.playbooks.timeLineChart({
      elementId: 'timeline-simple',
      dataUrl: 'data/timeline.csv'
  }).build()

  d3.playbooks.multiLineChart({
      elementId: 'multiline-simple',
      dataUrl: 'data/multiline.csv',
      yCols: ['y1', 'y2', 'y3']
  }).build()

  d3.playbooks.multiTimeLineChart({
      elementId: 'multitimeline-simple',
      dataUrl: 'data/multitimeline.csv',
      yCols: ['count_clinton', 'count_trump']
  }).build()
}
