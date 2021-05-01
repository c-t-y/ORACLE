function questionClick() {
  document.querySelector('.card-container-outer-outer').style.opacity = 0;
  document.querySelector('.card-container-outer-outer').style.zIndex = 0;

  document.querySelector('.questionmark').style.zIndex = -5;
  document.querySelector('.questionmark').style.opacity = 0;

  document.querySelector('.question-input-container-outer').style.zIndex = 5;
  document.querySelector('.question-input-container-outer').style.opacity = 1;
}

function eggClick() {
  console.log('hey');
  document.querySelector('.question-input-container-outer').style.opacity = 0;
}
