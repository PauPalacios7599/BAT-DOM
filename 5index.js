const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const albumList = document.getElementById('albumList')
albums.forEach((album) => {
  const listItem = document.createElement('li')
  listItem.textContent = album
  albumList.appendChild(listItem)
})
