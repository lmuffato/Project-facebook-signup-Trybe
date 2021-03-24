const btnLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const otherGenders = document.getElementById('other');
const formRegister = document.getElementById('form-register');
const btnRegister = document.getElementById('facebook-register');

btnLogin.addEventListener('click', () => {
  alert(emailPhone.value);
});

const genderInput = () => {
  const gender = document.createElement('input');
  gender.type = 'text';
  gender.id = 'gender-custom';
  gender.name = 'gender-custom';
  gender.placeholder = 'Gênero (opcional)';
  if (otherGenders) {
    formRegister.appendChild(gender);
  }
  otherGenders.removeEventListener('click', genderInput);
};

const checkEmpty = () => {
  const formInputs = formRegister.querySelectorAll('input[type="text"');
  const genderInput = formRegister.querySelectorAll('input[type="radio"]');
  const errorMessage = document.getElementById('message-error');

  for (let i = 0; i < formRegister.length; i += 1) {
    if (formRegister[i] === '' || formRegister[i] !== 'checked') {
      errorMessage.innerHTML = 'Campos inválidos';
    }
  }
}

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
})

otherGenders.addEventListener('click', genderInput);
btnRegister.addEventListener('click', () => {
  checkEmpty();
})
