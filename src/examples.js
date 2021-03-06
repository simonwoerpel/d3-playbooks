export default () => {
  // example how to add new functionality to this library
  // see `./playbooks/template.js`

  // 1. create a function to log width of chart
  d3.playbooks.CHARTS.baseChart.plays.logWidth = C => console.log('width:', C.width)

  // 2. add new function block to playbook template
  d3.playbooks.TEMPLATE.logger = {_width: 'logWidth'}

  // 3. add this function block to the `resize` handler
  d3.playbooks.TEMPLATE.resize.push('logger')


  // render some base examples
  const chart = d3.playbooks.barChart({
    dataUrl: 'data/bar.csv',
    yTickFormat: d => d/10 + ' %',
    on_small: c => {
      c.containerHeight = 550,
      c.height = 500
    }
  })

  chart.render()


  d3.playbooks.horizontalBarChart({
    data: [
      ['1', 3, '2'],
      ['a', 'b', 'c']
    ],
    responsiveSvg: true
  }).render()

  d3.playbooks.lineChart({
    dataUrl: 'data/line.csv'
  }).render()

  d3.playbooks.scatterChart({
    data: {
      x: [1, 2, 3, 4, 6],
      y: [2, 5, 1, 1, 8]
    }
  }).render()

  d3.playbooks.timeLineChart({
    dataUrl: 'data/timeline.csv'
  }).render()

  d3.playbooks.multiLineChart({
    dataUrl: 'data/multiline.csv',
    yCols: ['y1', 'y2', 'y3']
  }).render()

  d3.playbooks.multiTimeLineChart({
    dataUrl: 'data/multitimeline.csv',
    yCols: ['count_clinton', 'count_trump'],
    yTickFormat: d => d/1000 + 'k'
  }).render()

  const donutData = [
    {x: 'CDU', y: 32.7},
    {x: 'SPD', y: 42.3},
    {x: 'Bündnis 90/Grüne', y: 9.3},
    {x: 'FDP', y: 4.8},
    {x: 'Die Linke', y: 2.6},
    {x: 'Piraten', y: 7.9}
  ]

  d3.playbooks.donutChart({
    data: donutData
  }).render()

  d3.playbooks.semiDonutChart({
    data: donutData
  }).render()
}
