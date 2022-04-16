const inputRef = document.querySelector("#validation-input");

const onInputBlur = function () {
  inputRef.value.length === Number(inputRef.dataset.length)
    ? (inputRef.className = "valid")
    : (inputRef.className = "invalid");
};

inputRef.addEventListener("blur", onInputBlur);
