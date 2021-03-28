// for (let i = 0; i < lines; i++) {
//   console.log(i + 1);
//   document.querySelector(`#line-${i + 1}`).style.opacity = 1;
// }

let counter = 0;

document.addEventListener('click', () => {
  counter = counter + 1;
  document.querySelector(`#line-${counter}`).style.opacity = 1;
});
