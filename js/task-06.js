const inputRef = document.querySelector("#validation-input");

const onInputBlur = function () {
  inputRef.value.length < inputRef.dataset.length
    ? (inputRef.className = "invalid")
    : (inputRef.className = "valid");
};

inputRef.addEventListener("blur", onInputBlur);
