//FAQ with plus and minus
'use strict'
let faq = document.querySelectorAll('.about-us__text-section');
let answer = document.querySelectorAll('.about-us__text');
let btn = document.querySelectorAll('.about-us__button');

let addAnswerClick = (btn, answ, faq) => {
  btn.addEventListener('click', function () {
      if (answ.classList.contains('about-us__text--hide')) {
          faq.classList.add('about-us__text-section--on');
          answ.classList.remove('about-us__text--hide');            
          btn.classList.replace('about-us__button--plus', 'about-us__button--minus');
      } else {
        faq.classList.remove('about-us__text-section--on');
          answ.classList.add('about-us__text--hide');
          btn.classList.replace('about-us__button--minus', 'about-us__button--plus');
      }
  });
};
for (let i = 0; i < faq.length; i++) {
  addAnswerClick(btn[i], answer[i],faq[i])
}

let carRunner = document.querySelector('.hero__car-runner');

function parallax(event) {
  let value = this.scrollY;
  carRunner.style.transform = `translate(${value/2}px,${-value/3.5}px)`;
}
window.addEventListener('scroll', parallax)

function carusel(event) {
  console.log('in function')
  let value = this.clientX;
  this.querySelectorAll('.tips-cards__item').forEach(block => {
    block.addEventListener('mousedown', function () {
    console.log(block)
    block.style.transform = `translateX(${value}px)`
  })
  console.log(item)
})
}

document.addEventListener('mousemove', carusel);
