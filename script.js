const btnLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const otherGenders = document.getElementById('other');
const formRegister = document.getElementById('form-register');

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

otherGenders.addEventListener('click', genderInput);
