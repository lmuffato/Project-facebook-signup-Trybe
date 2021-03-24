const btnLogin = document.querySelector('#button-login');
const userEmail = document.querySelector('#user-email-phone');

btnLogin.addEventListener('click', () => {
  alert(userEmail.value);
});

const validate = () => {
  const rightContent = document.querySelector('.right-content');
  const name = document.querySelector('#firstName').value;
  const lastN = document.querySelector('#lastName').value;
  const phoneMail = document.querySelector('#phoneEmail').value;
  const birth = document.querySelector('#birthdate').value;
  const gender = document.querySelectorAll('.genderOptions');
  let genderValue = '';
  for (let index = 1; index < gender.length; index += 1) {
    if (gender[index].checked) {
      genderValue = gender[index].value;
    }
  }
  rightContent.innerText = `Olá, ${name} ${lastN}
  ${phoneMail}
  ${birth}
  ${genderValue}`;
};

const btnRegister = document.querySelector('#facebook-register');
btnRegister.addEventListener('click', (event) => {
  const userInputs = document.querySelectorAll('.user-data');
  event.preventDefault();
  let isValidate = 0;
  for (let index = 0; index < userInputs.length; index += 1) {
    if (userInputs[index].value === '') {
      const formAlert = document.querySelector('.create-account');
      const spanAlert = document.createElement('span');
      spanAlert.innerText = 'Campos inválidos';
      formAlert.appendChild(spanAlert);
      isValidate += 1;
      break;
    }
  }
  if (isValidate === 0) {
    return validate();
  }
});

const otherGender = document.querySelector('#other');
otherGender.addEventListener('click', () => {
  const nowrapClass = document.querySelector('.nowrap');
  const inputGender = document.createElement('input');
  inputGender.type = 'text';
  inputGender.placeholder = 'Gênero (opcional)';
  inputGender.name = 'gender-custom';
  nowrapClass.appendChild(inputGender);
});
