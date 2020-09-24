const marker = document.querySelector('.marker')
const menuItems = document.querySelectorAll('.link')

marker.style.width = '59px'
marker.style.left = '44px'
menuItems.forEach(linkItem => {
	linkItem.addEventListener('click', event => {
		markerFunction(event.target)
	})
})

const array = []
console.log(array)
const object = {}
console.log(object)
const hello = null
console.log(hello)
console.log(window)
console.log(window.document.__proto__.__proto__)
const markerFunction = link => {
	marker.style.width = link.offsetWidth + 'px'
	marker.style.left = link.offsetLeft + 'px'
}
const checkbox = document.getElementById('checkbox')
const body = document.querySelector('body')
const ball = document.querySelector('.ball')

checkbox.addEventListener('change', event => {
	body.classList.toggle('dark')
	marker.classList.toggle('white-marker')
	menuItems.forEach(link => {
		link.classList.toggle('white')
	})
})
