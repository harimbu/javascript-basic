const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '1dbf4157'
const APP_KEY = '3fa9211bc1489470aa00fe2aa42077a9'

function paintRecipe(items) {
  let foods = ''
  items.map(item => {
    foods += `
    <div class="food">
      <div class="food_img">
        <img src="./food.jpg" alt="" />
      </div>
      <div class="food_info">
        <div class="food__title">
          <h3>This is food title This is food title</h3>
          <a href="#" class="btn">View Recipe</a>
        </div>
        <p class="food__extra">Caloris : 150</p>
      </div>
    </div>
    `

    foodList.innerHTML = foods
  })
}

async function getRecipe(query) {
  const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`
  const response = await fetch(baseURL)
  const data = await response.json()
  paintRecipe(data.hits)
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
