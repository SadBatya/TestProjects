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
