const openModalBtn = document.querySelector('#open__modal--window');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close--icon');
const sendInfoBtn = document.querySelector('.send__btn');
const body = document.querySelector('body');
const prevBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');
const sliderLine = document.querySelector('.section3__line');
console.log(sliderLine);

function modalWindow() {
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('open');
    body.style.position = 'fixed';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    body.style.position = '';
  });

  sendInfoBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    body.style.position = '';
  });
}

modalWindow();

let offset = 0;

nextBtn.addEventListener('click', () => {
  offset += 785;
  if (offset > 3140) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

prevBtn.addEventListener('click', () => {
  offset -= 785;
  if (offset < 0) {
    offset = 3140;
  }
  sliderLine.style.left = -offset + 'px';
});


