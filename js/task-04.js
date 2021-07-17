const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const counterValueNumber = document.querySelector('#value');

let counterValue = 0;

const increment = function () {
    counterValue += 1;
    counterValueNumber.textContent = counterValue;

}

const decrement = function () {
    counterValue -= 1;
    counterValueNumber.textContent = counterValue;
    
}

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);

