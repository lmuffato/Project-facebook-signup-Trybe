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
  const genders = document.querySelectorAll('.genders');
  let result = '';

  for (let index = 0; index < genders.length; index += 1) {
    if (genders[index].checked) {
      result = genders[index].value;
    }
  }
  return result;
}

// verifica se os valores dos inputs não estão vazios
function fieldVerification() {
  if (fristName.value !== '' && lastName.value !== '') {
    return true;
  }
  if (birthdate.value !== '' && emailOrPhone.value !== '') {
    return true;
  }
  return false;
}

// apaga o form e cria a msg de final de cadastro
function messenger() {
  const rightContent = document.querySelector('.right-content');
  const gender = genderSelected();

  rightContent.className = 'right-content finalMessenger';
  rightContent.innerHTML = `<p> Olá, ${fristName.value} ${lastName.value}<br>
    email: ${emailOrPhone.value}<br>
    data de nascimento: ${birthdate.value}<br>
    genero: ${gender}<p>`;
}

// verifica se as funções são executadas e então executa a função de mensagem
function hellowNewUser() {
  if (fieldVerification() && genderSelected()) {
    messenger();
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
      const div = document.createElement('div');
      div.innerHTML = 'Campos inválidos';
      div.className = 'invalid-field';
      registerForm.appendChild(div);
      break;
    } else {
      hellowNewUser();
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
