//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const countriesList = document.getElementById('countries-list')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  countriesList.appendChild(li)
})

//1.2
const elementToRemove = document.querySelector('.fn-remove-me')
if (elementToRemove) {
  elementToRemove.remove()
}

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHereDiv = document.querySelector('[data-function="printHere"]')
const ul = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ul.appendChild(li)
})
printHereDiv.appendChild(ul)

//1.4
const countriesData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const container = document.getElementById('countries-container')
countriesData.forEach((country) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = country.title
  const img = document.createElement('img')
  img.src = country.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  container.appendChild(div)
})

//1.5
document.getElementById('remove-last').addEventListener('click', () => {
  const container = document.getElementById('countries-container')
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild)
  }
})

//1.6
countriesData.forEach((country, index) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = country.title
  const img = document.createElement('img')
  img.src = country.imgUrl
  const removeButton = document.createElement('button')
  removeButton.textContent = 'Eliminar'
  removeButton.addEventListener('click', () => {
    container.removeChild(div)
  })
  div.appendChild(h4)
  div.appendChild(img)
  div.appendChild(removeButton)
  container.appendChild(div)
})
