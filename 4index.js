//1.1
const btnToClick = document.getElementById('btnToClick')
btnToClick.addEventListener('Click', (event) => {
  console.log(event)
})

//1.2
const inputField = document.getElementById('inputField')
inputField.addEventListener('focus', () => {
  console.log(inputField.value)
})

//1.3
const inputField1 = document.getElementById('inputField1')
inputField1.addEventListener('input', () => {
  console.log(inputField1.value)
})
