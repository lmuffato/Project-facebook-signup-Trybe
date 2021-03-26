const buttonLogin = document.querySelector('#button-login');
const emailFone = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  window.alert(emailFone.value);
});

const registerButton = document.querySelector('#facebook-register');
const inputsTextAndPassword = document.querySelectorAll('.input-text-password');
const inputsRadio = document.querySelectorAll('.radio-buttons');
const formConteiner = document.querySelector('#form-conteiner');

function validateInputsTextPassword() {
  let validation = true;
  for (let index = 0; index < inputsTextAndPassword.length; index += 1) {
    if (inputsTextAndPassword[index].value === '') {
      validation = false;
      break;
    }
  }
  return validation;
}

function validateInputsRadio() {
  let validation = true;
  for (let index = 0; index < inputsRadio.length; index += 1) {
    if (inputsRadio[index].checked === false) {
      validation = false;
    } else {
      validation = true;
      break;
    }
  }
  return validation;
}

const invalidText = document.createElement('span');
formConteiner.appendChild(invalidText);

function validateForm(e) {
  e.preventDefault();
  const inputsValidation = validateInputsTextPassword() + validateInputsRadio();
  if (inputsValidation <= 1) {
    invalidText.innerHTML = 'Campos inválidos';
  } else {
    invalidText.innerHTML = '';
  }
}
registerButton.addEventListener('click', validateForm);

function criarInput(chek) {
  const divRadioButtons = document.getElementById('radio-buttons');
  if (chek.target.checked === true
    && document.getElementsByClassName('inputDinamico').length === 0) {
    const criarIn = document.createElement('input');
    criarIn.setAttribute('type', 'text');
    criarIn.setAttribute('name', 'gender-custom');
    criarIn.setAttribute('placeholder', 'Gênero (opcional)');
    criarIn.classList.add('inputDinamico');
    divRadioButtons.appendChild(criarIn);
  }
}
const btAdicionar = document.getElementById('personalizar');
btAdicionar.addEventListener('click', (e) => { criarInput(e); });

const btnCadastro = document.getElementById('facebook-register');
btnCadastro.addEventListener('click', (e) => { e.preventDefault(); });
