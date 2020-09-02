const weekProductBtn = document.querySelector('.week-product__btn');
const modalOrder = document.querySelector('.modal-order');
const modalOrderWindow = document.querySelector('.modal-order__window');


weekProductBtn.addEventListener('click', function () {
  modalOrder.classList.add('modal-order--open');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalOrder.classList.contains("modal-order--open")) {
      evt.preventDefault();
      modalOrder.classList.remove("modal-order--open");
    }
  }
});

document.addEventListener('click', function (evt) {
  if (!modalOrderWindow.contains(evt.target) && !weekProductBtn.contains(evt.target)) {
    if (modalOrder.classList.contains("modal-order--open")) {
      evt.preventDefault();
      modalOrder.classList.remove("modal-order--open");
    }
  }
});
