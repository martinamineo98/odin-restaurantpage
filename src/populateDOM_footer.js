
export const createFooter = (container) => {
	
	const footer = Object.assign(document.createElement('div'), {className: 'footer'})
	const footerAnchor = Object.assign(document.createElement('a'), {
												href: 'https://martinamineo98.github.io/odin-restaurantpage',
												textContent: '@martinamineo98'
											 })

	footer.appendChild(footerAnchor)
	container.appendChild(footer)
	
}
