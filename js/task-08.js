const formRef = document.querySelector(".login-form");
// const emailInputRef = document.querySelector('[type="email"]');
// const passwordInputRef = document.querySelector('[type="password"]');

const onSubmitBtnClick = function (event) {
  event.preventDefault();

  let emailField = formRef.elements.email.value;
  let passwordField = formRef.elements.password.value;

  if (emailField === "" || passwordField === "") {
    alert("Все поля должны быть заполнены!");
  }

  // нижнюю часть кода можно выполнить и без проверки,
  // но в таком случае в консоль будут записываться данные
  // даже если заполнен только одно поле
  // либо отдельно почта, либо отдельно пароль
  // оптимизация? другие условия проверки в первой части?

  if (emailField !== "" && passwordField !== "") {
    console.log({
      email: emailField,
      password: passwordField,
    });

    formRef.reset();
  }
};

formRef.addEventListener("submit", onSubmitBtnClick);
