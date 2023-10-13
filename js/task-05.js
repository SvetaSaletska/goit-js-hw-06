const userName = document.querySelector('#name-input');
const  output = document.querySelector('#name-output');

userName.addEventListener('input', handlerInput);

function handlerInput(evt) {
    output.textContent = evt.currentTarget.value.trim();
    
    if (evt.currentTarget.value === ''){
        output.textContent = 'Anonymous';
    }
}

