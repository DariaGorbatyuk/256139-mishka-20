const reviewBlock = document.querySelector(`.reviews`);
const reviews = reviewBlock.querySelectorAll(`.reviews__item`);
const btnPrev = reviewBlock.querySelector(`.reviews__slider-btn--previous`);
const btnNext = reviewBlock.querySelector(`.reviews__slider-btn--next`);
let isFirst = true;
let number = 0

const onBtnPrevClick = (evt) => {
  evt.preventDefault();
  reviews[number].classList.add(`reviews__item--hidden`);
  reviews[number - 1].classList.remove(`reviews__item--hidden`);
  number -= 1;
  btnPrev.disabled = number === 0;
  btnNext.disabled = false;
}


const onBtnNextClick = (evt) => {
  evt.preventDefault();
  if (reviews.length === 1) {
    return;
  }
  if (isFirst) {
    btnPrev.disabled = false;
    btnPrev.addEventListener(`click`, onBtnPrevClick);
    isFirst = false;
  }
  reviews[number].classList.add(`reviews__item--hidden`);
  reviews[number + 1].classList.remove(`reviews__item--hidden`);
  number += 1;
  btnNext.disabled = reviews.length === number + 1;
  btnPrev.disabled = false;
}
btnNext.addEventListener('click', onBtnNextClick)
