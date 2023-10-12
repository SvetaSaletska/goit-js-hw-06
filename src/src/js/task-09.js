function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const color = document.querySelector('.color')
const changeColorbtn = document.querySelector('.change-color');


changeColorbtn.addEventListener('click', handlerClick);

function handlerClick(evt) {
let randClr = getRandomHexColor();
  body.style.backgroundColor = randClr;
  color.getRandomHexColor = randClr;
}
