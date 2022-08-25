
export const createBlock = (function() {
	
	const blocks = document.querySelectorAll('.block')
	
	const addContent = (index) => {
		
		console.log('HELLO')
		
		if (index == 0) createHomeContent()
		if (index == 1) createMenuContent()
		if (index == 2) createContactContent()
		
	}
	
	const createHomeContent = () => {
		
		const homeBlock = blocks[0]
		const homeParagraph = Object.assign(document.createElement('p'), {
														textContent: `The Pianoforte is a sophisticated Italian Restaurant that has now
																					served you everyday since 1975. Our dishes are delicious and yet quite affordable.
																					We use exclusively locally sourced ingredients.`
													})
		const homeSpecialParagraph = Object.assign(document.createElement('p'), {
																		textContent: 'Food like nonna made it.',
																		className: 'home-special'
																	})
													
		homeBlock.appendChild(homeParagraph)
		homeBlock.appendChild(homeSpecialParagraph)
													
	}
	
	const createMenuContent = () => {
		
		const menuBlock = blocks[1]
		const menuTbody = document.createElement('tbody')
		const menuTable = Object.assign(document.createElement('table'), {
												className: 'menu-table'
											})
											
		// Table Content
											
		const menuAppetizers = {'Appetizers': [
			{'Name': 'Bruschetta', 'Ingredients': 'Wheat Bread, Extra Vergin Oil, Garlic, Basil, Grape Tomatoes, Pepper & Salt', 'Price': '5€'},
		]}
		
		const menuMainDishes = {'Main Dishes': [
			{'Name': 'Lasagna', 'Ingredients': 'Wheat Flour, Ground Meat, Bechamel, Tomato Sauce, Garlic, Carots, Celery, Onion, Extra Vergin Oil, Pepper & Salt', 'Price': 15},
		]}
		
		const menuDrinks = {'Drinks': [
			{'Name': 'Red Wine', 'Ingredients': 'Grapes', 'Price': 10}, {'Name': 'White Wine', 'Ingredients': 'Grapes', 'Price': 10},
		]}
										
		const menuDishes = [menuAppetizers, menuMainDishes, menuDrinks]
		
		// Add Table Content
		
		menuDishes.forEach((object, index) => {
			
			const key = Object.keys(object)
			const menuDishTypeName = key[0]
			const menuDishType = menuDishes[index][key]
			
			const menuTableRow = document.createElement('tr')
			const menuTableHeader = Object.assign(document.createElement('th'), {
																textContent: menuDishTypeName
															})
			
			menuTableRow.appendChild(menuTableHeader)
			menuTbody.appendChild(menuTableRow)
			
			menuDishType.forEach((dish) => {
				const dishKeys = Object.keys(dish)
				const dishValues = Object.values(dish)
				
				const menuDishTableRow = document.createElement('tr')
				const menuTableCell = document.createElement('td')
				const menuTableUl = document.createElement('ul')
				
				for (let value in dishValues) {
					const menuTableLi = Object.assign(document.createElement('li'),{
						innerHTML: `<strong>${dishKeys[value]}</strong>: <em>${dishValues[value]}</em>`
					})
					
					menuTableUl.appendChild(menuTableLi)
					menuTableCell.appendChild(menuTableUl)
					menuDishTableRow.appendChild(menuTableCell)
					menuTbody.appendChild(menuDishTableRow)
				}
						
			})
			
		})
		
		menuTable.appendChild(menuTbody)
		menuBlock.appendChild(menuTable)
	}
	
	const createContactContent = () => {
		const contactBlock = blocks[2]
		
		const contactDetails = Object.assign(document.createElement('div'), {
			className: 'contact-details'
		})
		
		const contactLocation = Object.assign(document.createElement('div'), {
			innerHTML: `<p>01 Narnia Street, NarniaTown, NarniaState</p>`
		})
		
		const contactPhone = Object.assign(document.createElement('div'), {
			innerHTML: `<p><a href="tel:+390000000000">+390000000000</a></p>
									<p><a href="tel:+390100000000">+390100000000</a></p>`
		})
		
		const contactEmail = Object.assign(document.createElement('div'), {
			innerHTML: `<p><a href="mailto:pianoforte@fake.com">pianoforte@fake.com</a></p>
									<p><a href="mailto:pianoforteinfo@fake.com">pianoforteinfo@fake.com</a></p>`
		})
		
		const contactElements = [contactLocation, contactPhone, contactEmail]
		
		contactElements.forEach((el) => contactDetails.appendChild(el))
		contactBlock.appendChild(contactDetails)
	}
	
	const removeContent = () => {
		blocks.forEach((block) => block.innerHTML = '')
	}
	
	return {
		removeContent,
		addContent
	}

})()
