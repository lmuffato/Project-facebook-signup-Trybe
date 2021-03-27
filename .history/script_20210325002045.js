const btnLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const otherGenders = document.getElementById('other');
const formRegister = document.getElementById('form-register');
const btnRegister = document.getElementById('facebook-register');
const genders = document.getElementById('genders');

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
    genders.appendChild(gender);
  }
  otherGenders.removeEventListener('click', genderInput);
};

const checkRadios = () => {
  let inputChecked = 0;
  const gendersInput = document.querySelectorAll('#genders label input');
  for (let i = 0; i < gendersInput.length; i += 1) {
    if (gendersInput[i].checked) {
      inputChecked += 1;
    }
  }
  return inputChecked;
};

const checkEmpty = () => {
  const formInputs = formRegister.querySelectorAll('input');
  const errorMessage = document.getElementById('message-error');

  for (let i = 0; i < formInputs.length; i += 1) {
    if (formInputs[i].value === '' || checkRadios() === 0) {
      errorMessage.innerHTML = 'Campos inválidos';
    } else {
      errorMessage.innerHTML = '';
    }
  }
};

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
});

otherGenders.addEventListener('click', genderInput);
btnRegister.addEventListener('click', () => {
  checkEmpty();
});
