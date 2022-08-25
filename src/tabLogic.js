
// Import: JavaScript files

import { createBlock } from './populateDOM_blocks.js'



const tabLogic = (function() {
	
	const tabs = document.querySelectorAll('.tab')
	const blocks = document.querySelectorAll('.block')
	
	// Default State
	// When we open the page, we want the home block to have content.
		
	tabs[0].classList.add('isActive')
	blocks[0].classList.add('isActive')
	createBlock.addContent(0)
	
	tabs.forEach((tab, index) => {
		
		tab.addEventListener('click', () => {
			
			// Remove the isActive class from each tab and block.
			tabs.forEach((x) => x.classList.remove('isActive'))
			blocks.forEach((x) => x.classList.remove('isActive'))
			
			// Remove content from each block.
			createBlock.removeContent()
			
			// Add the isActive class to the clicked tab and the matching block.
			tab.classList.add('isActive')
			blocks[index].classList.add('isActive')
			
			// Create the content of the block matching the clicked tab.
			createBlock.addContent(index)
			
			
		})
		
	})
	
})()
