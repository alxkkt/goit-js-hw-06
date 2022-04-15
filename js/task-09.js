function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const textFieldRef = document.querySelector(".color");

const onButtonClick = function () {
  let randomColor = getRandomHexColor();

  textFieldRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};

buttonRef.addEventListener("click", onButtonClick);
