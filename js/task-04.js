const valueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');


let counterValue = Number(valueRef.textContent);

const onButtonClick = function (event) {
    counterValue += Number(event.currentTarget.textContent);

    valueRef.textContent = counterValue;
}

incrementBtnRef.addEventListener('click', onButtonClick);
decrementBtnRef.addEventListener('click', onButtonClick);