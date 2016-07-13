<riot-searchbox class="simple-charts__searchbox" style={ opts.position }>

  <label>{ opts.description }</label>
  <input type="text" oninput={ search } />
  <ul if={ results.length > 0 } class="simple-charts__searchbox__result-list">
    <li each={ results }
      class={ '-active' ? parent.opts.active === id : ''}
      onclick={ handleClick }>
      { sparkasse }
    </li>
  </ul>

  this.results = []

  this.search = (e) => {
    let str = e.target.value.toLowerCase()
    if (str.length >= this.opts.thereshold) {
      let results = this.opts.doSearch(str)
      if (results.length == 1) {
        this.hilight(results[0])
      } else {
        this.results = results
      }
    } else if (str.length < this.opts.thereshold) {
      this.results = []
    }
  }

  this.hilight = (data) => {
    // clear list
    this.results = []
    this.opts.control.trigger(riot.EVT.hilightNode, data)
  }

  this.handleClick = (e) => {
    let data = e.item
    this.hilight(data)
  }

</riot-searchbox>