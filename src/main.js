import './style/main.scss'
import renderExamples from './examples.js'

if (process.env.NODE_ENV == 'development') {
  renderExamples()
}
