
export const populateMain = (main) => {
	
	// Create the content that appears each time the matching tab is clicked.
	// The 'tabLogic.js' file will handle what block shows its content.
		
	const createHome = (function() {
		const home = Object.assign(document.createElement('div'), {
									className: 'block block-home'
								})
														
		main.appendChild(home)
	})()
	
	const createMenu = (function() {
		const menu = Object.assign(document.createElement('div'), {
									className: 'block block-menu'
								})
								
		main.appendChild(menu)
	})()
	
	const createContact = (function() {
		const contact = Object.assign(document.createElement('div'), {
									className: 'block block-contact'
								})
								
		main.appendChild(contact)
	})()
	
}
