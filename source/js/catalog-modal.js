const modalOrder = document.querySelector('.modal-order');
const modalOrderWindow = document.querySelector('.modal-order__window');
const basketBtn = document.querySelectorAll('.card__btn');

basketBtn.forEach(item => {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalOrder.classList.add('modal-order--open');
  })
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalOrder.classList.contains("modal-order--open")) {
      evt.preventDefault();
      modalOrder.classList.remove("modal-order--open");
    }
  }
});

document.addEventListener('click', function (evt) {
  if (!modalOrderWindow.contains(evt.target) && !basketBtn[0].contains(evt.target) && !basketBtn[1].contains(evt.target) && !basketBtn[2].contains(evt.target))
  {
    if (modalOrder.classList.contains("modal-order--open")) {
      modalOrder.classList.remove("modal-order--open");
    }
  }
});
