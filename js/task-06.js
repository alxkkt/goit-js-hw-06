const inputRef = document.querySelector('#validation-input');

const onInputBlur = function (event) {
    inputRef.value.length < inputRef.dataset.length ?
        inputRef.classList.add('invalid') :
        inputRef.className = 'valid';
}

inputRef.addEventListener('blur', onInputBlur)