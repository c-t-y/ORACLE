let counter = 0;

document.addEventListener('click', () => {
  counter = counter + 1;
  document.querySelector(`#line-${counter}`).classList.add('fadeIn');
});
