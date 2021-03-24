function enterButton() {
  const emailOrCel = document.getElementById('user-email-phone').value;
  if (emailOrCel !== '') {
    alert(emailOrCel);
  }
}

const radio = document.getElementById('gender');
const customGenderId = 'custom-gender';

function customGender() {
  const newField = document.createElement('input');
  const hasField = document.getElementById(customGenderId);
  if (hasField === null) {
    newField.id = customGenderId;
    newField.name = 'gender-custom';
    newField.placeholder = 'Gênero (opcional)';
    radio.appendChild(newField);
  }
}

function removeCustomField() {
  const hasField = document.getElementById(customGenderId);
  if (hasField !== null) {
    radio.removeChild(hasField);
  }
}

function removeInvalidDiv() {
  const form = document.getElementById('register-form');
  const divRemove = document.querySelector('.invalid-field');
  if (divRemove !== null) {
    form.removeChild(divRemove);
  }
}

function registerButton() {
  const registerForm = document.getElementById('register-form').elements;
  const formSize = registerForm.length;
  for (let index = 0; index < formSize; index += 1) {
    const registerInput = registerForm[index].value;
    if (registerInput === '') {
      removeInvalidDiv();
      const div = document.createElement('div');
      div.innerHTML = 'Campos inválidos!';
      div.className = 'invalid-field';
      registerForm[index].parentNode.parentNode.appendChild(div);
      break;
    } else {
      console.log(registerInput);
    }
  }
}

const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', enterButton);

const personal = document.getElementById('personalizado');
personal.addEventListener('click', customGender);

const genderMale = document.getElementById('masculino');
genderMale.addEventListener('click', removeCustomField);

const genderFemale = document.getElementById('feminino');
genderFemale.addEventListener('click', removeCustomField);

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', registerButton);
