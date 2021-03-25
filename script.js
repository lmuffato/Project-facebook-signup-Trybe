const form = document.getElementById('register-form');
const fristName = document.querySelector('#frist-name');
const lastName = document.querySelector('#last-name');
const emailOrPhone = document.querySelector('#email-phone');
const birthdate = document.querySelector('#birthdate');

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
  const divRemove = document.querySelector('.invalid-field');
  if (divRemove !== null) {
    form.removeChild(divRemove);
  }
}

// pega o valor do genero selecionado
function genderSelected() {
  const feminino = document.querySelector('#feminino');
  const masculino = document.querySelector('#masculino');
  const personalizado = document.querySelector('#personalizado');

  if (feminino.checked) {
    return feminino.value;
  }
  if (masculino.checked) {
    return masculino.value;
  }
  if (personalizado.checked) {
    return personalizado.value;
  }
}

// mostra msg no final do cadastro
function hellowNewUser() {
  const gender = genderSelected();
  const registerFormElements = form.elements;
  const formSize = registerFormElements.length;
  const rightContent = document.querySelector('.right-content');
  for (let index = 0; index < formSize; index += 1) {
    const registerInput = registerFormElements[index];
    if (registerInput !== '') {
      rightContent.innerHTML = '';
      rightContent.innerHTML = `Olá, ${fristName.value} ${lastName.value}
      ${emailOrPhone.value}
      ${birthdate.value}
      ${gender}`;
    }
  }
}

function registerButton() {
  const registerForm = document.getElementById('register-form');
  const registerFormElements = registerForm.elements;
  const formSize = registerFormElements.length;
  for (let index = 0; index < formSize; index += 1) {
    const registerInput = registerFormElements[index].value;
    if (registerInput === '') {
      removeInvalidDiv();
      hellowNewUser();
      const div = document.createElement('div');
      div.innerHTML = 'Campos inválidos';
      div.className = 'invalid-field';
      registerForm.appendChild(div);
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
