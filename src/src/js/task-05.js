const userName = document.querySelector('#name-input');
const  name = document.querySelector('#name-output');

console.log(message);
userName.addEventListener('input', handlerInput);

function handlerInput (evt) {
    console.log(evt.currentTarget.value)
    if (evt.currentTarget.value === ''){
        message = 'Anonymous';
    } else 
    name = '${userName}'
}