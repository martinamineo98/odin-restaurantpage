
// Import: Javascript Files

import {populateMain} from './populateDOM_populateMain.js'



export const createMain = (container) => {

	const main = Object.assign(document.createElement('div'), {className: 'main', role: 'main'})
	container.appendChild(main)
	
	populateMain(main)

}
