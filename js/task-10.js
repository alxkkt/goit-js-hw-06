function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const containerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('[type="number"]');

const createBoxes = function (amount) {
  containerRef.innerHTML = ''; // добавил, чтобы каждый раз создавалась новая коллекция

  let newBoxes = [];

  for (let i = 0; i < inputRef.value; i += 1) {
    containerRef.insertAdjacentHTML('afterbegin', '<div>');
    newBoxes.push(document.querySelector('#boxes div'));
  }

  newBoxes.forEach((box, index) => {
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
  });
}

const destroyBoxes = function () {
  containerRef.innerHTML = '';
  inputRef.value = '';
}

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);