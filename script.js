//Menu

const marker = document.getElementById('marker')
const item = document.querySelectorAll('.link')

const nav = document.getElementById('nav')
const indicator = (e) => {
	marker.style.left = e.offsetLeft + 'px'
	marker.style.width = e.offsetWidth + 'px'
}

item.forEach((link) => {
	link.addEventListener('click', (e) => {
		indicator(e.target)
	})
})

// Dark Theme
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
	document.body.classList.toggle('dark')
	item.forEach((link) => {
		link.classList.toggle('white')
	})
})

// Boxes
const boxContainer = document.getElementById('box-container')
const boxesArray = []

for (let i = 0; i < 500; i++) {
	const element = document.createElement('div')
	const width = 10 * Math.random() * 10
	element.classList.add('box')
	element.style.background =
		'#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
	element.style.width = width + 'px'
	element.style.left = Math.random() * 900 + 'px'
	element.style.top = Math.random() * 560 + 'px'
	boxesArray.push(element)
	boxContainer.appendChild(element)
}

boxesArray.forEach((box) => {
	box.addEventListener('click', (e) => {
		e.target.style.top = e.target.offsetTop + Math.random() * 300 - 150 + 'px'
		e.target.style.left = e.target.offsetLeft + Math.random() * 200 - 150 + 'px'
	})
})
