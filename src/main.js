import './style/main.scss'
import './export.js'
import renderExamples from './examples.js'

if (process.env.NODE_ENV == 'development') {
  window.d3 = d3
  renderExamples()
}
