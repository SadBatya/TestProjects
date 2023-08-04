const openModalBtn = document.querySelector('#open__modal--window')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__close--icon')
const sendInfoBtn = document.querySelector('.send__btn')
const body = document.querySelector('body')

openModalBtn.addEventListener('click', () => {
  modal.classList.add('open')
  body.style.position = 'fixed'
})

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('open')
  body.style.position = ''
})


sendInfoBtn.addEventListener('click', () => {
  modal.classList.remove('open')
  body.style.position = ''
})

alert('Здравствуйте!Меня зовут Владимир! Буду очень рад обратному фидбеку!')
setTimeout(() => {
  alert('Вот мои контакты для связи 8-909-776-47-38')
  alert('Telegram @sadbatyaa')
}, 7000)