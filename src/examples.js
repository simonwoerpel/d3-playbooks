export default () => {
  d3.playbooks.barChart({
    dataUrl: 'data/bar.csv'
  }).build()

  d3.playbooks.horizontalBarChart({
    dataUrl: 'data/bar.csv',
    data: [
      [1, 3, 2],
      ['a', 'b', 'c']
    ]
  }).build()

  d3.playbooks.lineChart({
    dataUrl: 'data/line.csv'
  }).build()

  d3.playbooks.scatterChart({
    data: {
      x: [1, 2, 3, 4, 6],
      y: [2, 5, 1, 1, 8]
    }
  }).build()

  d3.playbooks.timeLineChart({
    dataUrl: 'data/timeline.csv'
  }).build()

  d3.playbooks.multiLineChart({
    dataUrl: 'data/multiline.csv',
    yCols: ['y1', 'y2', 'y3']
  }).build()

  d3.playbooks.multiTimeLineChart({
    dataUrl: 'data/multitimeline.csv',
    yCols: ['count_clinton', 'count_trump']
  }).build()
}
