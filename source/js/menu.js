const nav = document.querySelector(`.nav`);
const button = document.querySelector(`.nav__toggle`);

const onMenuClick = () => {
  if(nav.classList.contains(`nav--opened`)){
    nav.classList.remove(`nav--opened`);
    nav.classList.add(`nav--closed`);
  }else{
    nav.classList.remove(`nav--closed`);
    nav.classList.add(`nav--opened`);
  }
}
button.addEventListener('click', onMenuClick)
