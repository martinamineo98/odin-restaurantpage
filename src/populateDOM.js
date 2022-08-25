
// Imports: Javascript Files

import { createNav } from './populateDOM_nav.js'
import { createHeader} from './populateDOM_header.js'
import { createMain } from './populateDOM_main.js'
import { createFooter } from './populateDOM_footer.js'

// Imports: Images

import pianoSVG from './vintage-piano-line-art.svg'



const populateDOM = (function() {
	
	const container = document.querySelector('#content')
	
	createNav(container)
	createHeader(container, pianoSVG, 'the pianoforte', 'together from 1975')
	createMain(container)
	createFooter(container)
	
})()
