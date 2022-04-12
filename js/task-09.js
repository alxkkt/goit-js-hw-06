function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const buttonRef = body.querySelector('.change-color');
const textFieldRef = body.querySelector('.color');


const onButtonClick = function () {
  textFieldRef.textContent = getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor();
}


buttonRef.addEventListener('click', onButtonClick)