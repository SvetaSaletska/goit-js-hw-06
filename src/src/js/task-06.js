const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', handlerGreeting)


function handlerGreeting(evt) {
    const length = Number(validationInput.dataset.length);
    const currentLength = validationInput.value.length;

    if (currentLength === length) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
};