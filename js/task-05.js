const input = document.querySelector('#name-input');
const username = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    event.currentTarget.value.trim() ? username.textContent = input.value : username.textContent = 'незнакомец';
})

