const textRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');

const onSliderChange = function (event) {
    // textRef.style.fontSize = event.currentTarget.value + 'px';
    textRef.style.fontSize = `${event.currentTarget.value}px`
}

inputRef.addEventListener('input', onSliderChange);