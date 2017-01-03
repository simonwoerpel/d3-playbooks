// example how to add new functionality to this library

// 1. create a function
d3.playbooks.CHARTS.baseChart.plays.logWidth = C => console.log('width:', C.width)

// 2. add new function block to playbook template
// `d3.playbooks.TEMPLATE` is an `Immutable`: https://facebook.github.io/immutable-js/docs/#/OrderedMap
const updatedTemplate = d3.playbooks.TEMPLATE
  .mergeDeep({logger: {_width: 'logWidth'}})

// 3. add this function block to the `resize` handler
  .updateIn(['resize'], val => val.concat(['logger']))

// 4. set new template as default `TEMPLATE`
d3.playbooks.TEMPLATE = updatedTemplate


// render some base examples
export default () => {
  d3.playbooks.barChart({
    dataUrl: 'data/bar.csv'
  }).build()

  d3.playbooks.horizontalBarChart({
    dataUrl: 'data/bar.csv',
    data: [
      ['1', 3, '2'],
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
