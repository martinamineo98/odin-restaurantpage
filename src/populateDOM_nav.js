
export const createNav = (container) => {
	
	const nav = Object.assign(document.createElement('nav'), {
								className: 'nav'
							})
							
	const navUl = document.createElement('ul')

	container.appendChild(nav)
	nav.appendChild(navUl)
	
	const createTabs = (function() {
		
		const tabs = ['home', 'menu', 'contact']
		
		for (let tab in tabs) {
			
			const navLi = Object.assign(document.createElement('li'), {
											className: `tab tab-${tabs[tab]}`
										})
										
			const navAnchor = Object.assign(document.createElement('a'), {
													textContent: tabs[tab]
												})
			
			navUl.appendChild(navLi)
			navLi.appendChild(navAnchor)
			
		}
		
	})()
	
}
