// requisito 7
const buttonLogin = document.getElementById('button-login');

function alertLoginButton() {
  const emailPhone = document.getElementById('user-email-phone').value;
  alert(emailPhone);
}

buttonLogin.addEventListener('click', alertLoginButton);

// requisito 18
// Ajuda na lógica de validação de Lucas Godoi - Turma 10 - tribo A
const rightInp = document.querySelectorAll('.right-content input[type="text"]');
const passInp = document.querySelector('.right-content input[type="password"]');
const divRadio = document.querySelectorAll('#radio-gender input[type="radio"]');

function validateInputs() {
  let resultTrue = true;
  const resultFalse = false;
  for (let index = 0; index < rightInp.length; index += 1) {
    if ((rightInp[index].value && passInp.value) === '') {
      resultTrue = resultFalse;
    }
  }
  return resultTrue;
}

function validateRadios() {
  const resultTrue = true;
  let resultFalse = false;
  for (let index = 0; index < divRadio.length; index += 1) {
    if (divRadio[index].checked) {
      resultFalse = resultFalse || resultTrue;
    }
  }
  return resultFalse;
}

const buttonRegister = document.getElementById('facebook-register');

// requisito 19
const radioFemale = document.getElementById('feminino');
const radioMale = document.getElementById('masculino');
const radioCustomized = document.getElementById('personalizado');
const divInputCustomized = document.getElementById('customized-container');

function selectCustomized() {
  const inputCustomized = document.createElement('input');
  inputCustomized.type = 'text';
  inputCustomized.name = 'gender-custom';
  inputCustomized.placeholder = 'Gênero (opcional)';
  inputCustomized.id = 'input-customized';
  divInputCustomized.appendChild(inputCustomized);
}

function removeCustomized() {
  const inputCustomized = document.getElementById('input-customized');
  if (inputCustomized) {
    divInputCustomized.removeChild(inputCustomized);
  }
}

radioCustomized.addEventListener('change', selectCustomized);

radioFemale.addEventListener('change', removeCustomized);

radioMale.addEventListener('change', removeCustomized);

// requisito 20
// Ajuda na lógica de construção de Lucas Godoi - Turma 10 - tribo A
function createElements(elements, text) {
  const createElement = document.createElement(elements);
  createElement.innerHTML = text;
  return createElement;
}

function createDiv() {
  const rightContent = document.querySelector('.right-content');
  const firstname = document.querySelector('input[name="firstname"]').value;
  const lastname = document.querySelector('input[name="lastname"]').value;
  const phoneEmail = document.querySelector('input[name="phone_email"]').value;
  const birthday = document.querySelector('input[name="birthdate"]').value;
  const gender = [...document.querySelectorAll('#radio-gender input')];
  rightContent.innerHTML = '';
  rightContent.appendChild(createElements('p',
    `Olá, ${firstname} ${lastname}`));
  rightContent.appendChild(createElements('p',
    `email/ telefone: ${phoneEmail}`));
  rightContent.appendChild(createElements('p',
    `Data de nascimento: ${birthday}`));
  rightContent.appendChild(createElements('p',
    `Gênero: ${gender.filter((x) => x.checked)[0].value}`));
}

function validateForm() {
  buttonRegister.addEventListener('click', (event) => {
    const functionInputsText = validateInputs();
    const functionInputsRadio = validateRadios();
    if ((functionInputsText && functionInputsRadio) === false) {
      event.preventDefault();
      document.querySelector('.validateError').style.display = 'flex';
    } else {
      createDiv();
    }
  });
}
validateForm();
