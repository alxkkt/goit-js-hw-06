const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


const onInputChange = function (event) {
    outputRef.textContent = event.currentTarget.value;

    if (outputRef.textContent === '') {
        outputRef.textContent = 'Anonymous';
    }        
}


inputRef.addEventListener('input', onInputChange)