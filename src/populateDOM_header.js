
export const createHeader = (container, pianoSVG, name, desc) => {

	const header = Object.assign(document.createElement('header'), {className: 'header'})
	const headerImg = Object.assign(document.createElement('img'), {src: pianoSVG, alt: 'Vintage Piano Line Art'})
	const headerH1 = Object.assign(document.createElement('h1'), {textContent: name})
	const headerParagraph = Object.assign(document.createElement('p'), {textContent: desc})

	const headerElements = [headerImg, headerH1, headerParagraph]
				headerElements.forEach((el) => header.appendChild(el))
	
	container.appendChild(header)
	
	const createDecorativeBoxes = (function() {
		
		const box1 = Object.assign(document.createElement('div'), {className: 'header-box'})
		header.appendChild(box1)
		
	})()
	
}
