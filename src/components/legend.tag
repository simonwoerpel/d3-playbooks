import makeResponsive from '../utils/tags/setup_responsive_tag.js'

<riot-legend class="d3-playbooks__legend { opts.cssClasses }" style={ position }>
  <ul class="d3-playbooks__legend__list">
    <li each={ opts.legendItems }>
      <span class="color" style="background-color:{ color };"></span>
      { label }
    </li>
  </ul>

  makeResponsive(this)

</riot-legend>


