const formRef = document.querySelector('.login-form');
const emailInputRef = document.querySelector('[type="email"]');
const passwordInputRef = document.querySelector('[type="password"]');

const onSubmitBtnClick = function (event) {
    event.preventDefault();

    if (emailInputRef.value === '' ||
        passwordInputRef.value === '') {
        alert('Все поля должны быть заполнены!');
    };

        // нижнюю часть кода можно выполнить и без проверки,
        // но в таком случае в консоль будут записываться данные
        // даже если заполнен только одно поле
        // либо отдельно почта, либо отдельно пароль
        // оптимизация? другие условия проверки в первой части?
    
    if (emailInputRef.value !== '' &&
        passwordInputRef.value !== '') {
        
        console.log({
            [emailInputRef.name]: emailInputRef.value,
            [passwordInputRef.name]: passwordInputRef.value,
        });

        formRef.reset();
    };
}

formRef.addEventListener('submit', onSubmitBtnClick);