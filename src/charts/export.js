import charts from './available_charts.js'
import chart from '../chart.js'

// init
d3.playbooks = {}

// make chart types global as functions
Object.keys(charts).map(c => {
  d3.playbooks[c] = opts => {
    opts.kind = c
    return chart(opts)
  }
})
