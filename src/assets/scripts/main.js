//FAQ with plus and minus
console.log('tut');
let faq = document.querySelectorAll('.about-us__text-section');
let answer = document.querySelectorAll('.about-us__text');
let btn = document.querySelectorAll('.about-us__button');

let addAnswerClick = function (btn, answ, faq) {
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