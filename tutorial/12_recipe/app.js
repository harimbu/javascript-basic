const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '1dbf4157'
const APP_KEY = '3fa9211bc1489470aa00fe2aa42077a9'

async function getRecipe(query) {
  const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`
  const response = await fetch(baseURL)
  const data = await response.json()
  console.log(data.hits)
}

function init() {
  form.addEventListener('submit', e => {
    e.preventDefault()
    const query = input.value
    if (query === '') return
    getRecipe(query)
    input.value = ''
  })
}

init()
