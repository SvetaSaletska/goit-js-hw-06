const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

input.addEventListener('input', handlerCheck);

function handlerCheck(evt) {
     const size = input.value;
     textEl.style.fontSize = `${size}px`;
}