// // 오늘 날짜의 요일 구하기
// const days = ['일', '월', '화', '수', '목', '금', '토']
// const now = new Date()
// const today = now.getDay()
// console.log(days[today])

// // 특정한 날짜의 요일 구하기
// const days = ['일', '월', '화', '수', '목', '금', '토']
// const eventDay = new Date('2020-12-25')
// const theDay = eventDay.getDay()
// console.log(days[theDay])

const week = ['일', '월', '화', '수', '목', '금', '토']
const lastDay = document.getElementById('last_day')

const dDay = new Date(2020, 11, 24, 18, 0)
const year = dDay.getFullYear()
const month = dDay.getMonth() + 1
const date = dDay.getDate()
const day = week[dDay.getDay()]
const hour = dDay.getHours()
const minute = dDay.getMinutes()

lastDay.textContent = `${year}년 ${month}월 ${date} (${day}) ${hour}: 0${minute}`
