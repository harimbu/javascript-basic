const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', function (e) {
  e.preventDefault()
  const value = input.value
  result.textContent = value
})
