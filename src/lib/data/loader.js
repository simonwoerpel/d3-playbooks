import Papa from 'papaparse'
import Promise from 'promise-polyfill'
import {timeParse} from '../../d3_packages.js'

function _loadCsv(dataUrl) {
  return new Promise((resolve, reject) => {
    Papa.parse(dataUrl, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (res) => resolve(res.data),
      error: (err, file) => reject(err)
    })
  })
}


export default ({
  data,
  dataUrl,
  xCol,
  yCol,
  yCols,
  filter,
  timeFormat
}) => {
  return new Promise((resolve) => {
    // also return promise if data is already there
    const _getData = data ? new Promise(r => r(data)) : _loadCsv(dataUrl)
    _getData.then((rows) => {
      if (filter) rows = rows.filter(filter)
      if (timeFormat) {
        // FIXME
        const parseTime = timeParse(timeFormat)
        rows.forEach(r => r[xCol] = parseTime(r[xCol]))
      }

      // ensure data is present
      // FIXME better implementation for both
      // (or later more?) types
      if (xCol && yCols) {
        resolve(rows.filter(r => (r[xCol] && yCols.map(c => r[c]).every(e => !!e))))
      } else {
        resolve(rows.filter(r => (r[xCol] && r[yCol])))
      }
    })
  })
}
