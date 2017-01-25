# d3-playbooks

see documentation at https://github.com/simonwoerpel/d3-playbooks-maps to get the idea.

checkout repo, `npm install` and then `npm run dev` to see examples at `http://localhost:1337`.

## quickstart

```javascript
d3.playbooks.barChart({
  dataUrl: './data.csv'
}).render()
```

### dependencies

required:

- recent version (>=4) of d3.

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
```

## available charts

- `d3.playbooks.barChart`
- `d3.playbooks.horizontalBarChart`
- `d3.playbooks.lineChart`
- `d3.playbooks.timeLineChart`
- `d3.playbooks.multiLineChart`
- `d3.playbooks.multiTimeLineChart`
- `d3.playbooks.scatterChart`
- `d3.playbooks.circleDonut`
- `d3.playbooks.semiCircleDonut`

## examples

```javascript
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

  const data = [
    {x: 'CDU', y: 32.7},
    {x: 'SPD', y: 42.3},
    {x: 'Bündnis 90/Grüne', y: 9.3},
    {x: 'FDP', y: 4.8},
    {x: 'Die Linke', y: 2.6},
    {x: 'Piraten', y: 7.9}
  ]

  d3.playbooks.donutChart({data}).render()

  d3.playbooks.semiDonutChart({data}).render()
}
```
