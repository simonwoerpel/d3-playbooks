import './style/main.scss'
import './charts/export.js'
import renderExamples from './examples.js'

if (process.env.NODE_ENV == 'development') {
  renderExamples()
}
