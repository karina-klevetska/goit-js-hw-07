const input = document.querySelector('#validation-input');
console.log(input)

const checkInput = () => input.value.length !== Number(input.getAttribute('data-length')) ? input.classList.add('invalid') : input.classList.replace('invalid', 'valid');

input.addEventListener('blur', checkInput);