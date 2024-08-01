//1.1
let emptyDiv = document.createElement('div')
document.body.appendChild(emptyDiv)

//1.2
let divWithP = document.createElement('div')
let pInDiv = document.createElement('p')
pInDiv.textContent = 'Texto dentro de p'
divWithP.appendChild(pInDiv)
document.body.appendChild(divWithP)

//1.3
let divWith6P = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  let p = document.createElement('p')
  p.textContent = `Párrafo ${i}`
  divWith6P.appendChild(p)
}
document.body.appendChild(divWith6P)

//1.4
let dynamicP = document.createElement('p')
dynamicP.textContent = 'Soy dinámico!'
document.body.appendChild(dynamicP)

//1.5
let h2InsertHere = document.querySelector('.fn-insert-here')
h2InsertHere.textContent = 'Wubba Lubba dub dub'

//1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let ul = document.createElement('ul')
apps.forEach((app) => {
  let li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

//1.7
let elementsToRemove = document.querySelectorAll('.fn-remove-me')
elementsToRemove.forEach((element) => element.remove())

//1.8
let middleP = document.createElement('p')
middleP.textContent = 'Voy en medio!'
let divs = document.querySelectorAll('body > div')
if (divs.length >= 2) {
  divs[0].parentNode.insertBefore(middleP, divs[1])
}

//1.9
let divsInsertHere = document.querySelectorAll('.fn-insert-here')
divsInsertHere.forEach((div) => {
  let pInside = document.createElement('p')
  pInside.textContent = 'Voy dentro!'
  div.appendChild(pInside)
})
